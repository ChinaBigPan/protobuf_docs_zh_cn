---
title: 使用
---

# 使用

[英文原地址](https://github.com/protobufjs/protobuf.js#usage)

[性能]:https://github.com/protobufjs/protobuf.js#performance

因为 JavaScript 是一种动态类型语言，为保证最佳的[性能][性能](以及作为副产品的类型验证)，`protobuf.js`引入了**有效信息**(valid message)的概念：

## 有效信息

> 有效信息是指一个对象：
> (1) 不会遗漏任何必需字段。
> (2) 仅由有线格式(wire format)编写者能理解的 JS 类型组成。

有两种可能的有效信息类型和编码器能够实现这种情况：

- **信息实例**(原型上有默认值的信息类的显式实例)始终(必须)满足有效的信息需求。
- **简单对象**(plain JavaScript object)恰好以满足有效信息所需的方式组合而成。

简而言之，有线格式编写者能够理解以下类型：

[long.js]:https://github.com/dcodeIO/long.js

| 字段类型 | 期望的 JS 类型(创建、编码) | (从对象)转换 |
|:---:|----|----|
| s-/u-/int32<br />s-/fixed32 | `number`(32位整数) | 如果有符号`value | 0`<br />如果没有符号`value >>> 0` |
| s-/u-/int64<br />s-/fixed64 | `Long`(最佳)<br />`number`(53 位整数) | [long.js][long.js]的`Long.fromValue(value)`<br />或者是`parseInt(value, 10)` |
| float<br />double | `number` | `Number(value)` |
| bool | `boolean` | `Boolean(value)` |
| string | `string` | `String(value)` |
| bytes | `Uint8Array`(最佳)<br />`Buffer`(node 环境最佳)<br />`Array.<number>`(8 位整数) | 如果是`string`则`base64.decode(value)`<br />带有非零的`.length`属性的`Object`会被认为是类 buffer 对象。|
| enum | `number`(32位整数) | 如果是`string`，则查找数字 id |
| message | 有效信息 | `Message.fromObject(value)` |

- 如果字段是可选字段，则将显式的`undefined`和`null`视为未设置。
- 重复字段为`Array.<T>`。
- 映射字段是带有相应值是字符串表示键的`Object.<string,T>`，或者是类`Long`类型的`8`个字符长的二进制散列字符串。
- 表格中标出“最佳”的类型性能最好，因为不需要任何转换步骤(如数字向低位或高位转换，或 base64 字符串转换为 buffer)。

## 工具箱

[varint]:https://www.cnblogs.com/jacksu-tencent/p/3389843.html?utm_source=tuicool

出于性能原因，每个`message`类都提供了一组不同的方法，各司其职。这避免了性能方面的不必要断言/冗余操作，但也迫使用户在必要时主动执行验证(对于可能恰好是有效信息的简单对象) ———— 比方说在处理用户输入的时候。

**注意**，下面的`Message`指任意`message`类。

- **Message.verify**(message: Object): null|string    
  验证普通 JavaScript 对象是否满足有效信息需求，从而可以无顾虑地进行编码。它不抛出错误消息，而是以字符串的形式返回错误消息(如果有的话)。
```js
var payload = "invalid (not an object)";
var err = AwesomeMessage.verify(payload);
if (err)
  throw Error(err);
```
- **Message.encode**(message: Message|Object [, writer: Writer]): Writer    
  对**信息实例**或**简单 JavaScript 对象**进行编码。该方法并不隐式验证信息，对于信息的有效性是由用户来保证的。
```js
var buffer = AwesomeMessage.encode(message).finish();
```
- **Message.encodeDelimited**(message: Message|Object [, writer: Writer]): Writer    
  与`Message.encode`类似，但是以[varint][varint]形式添加了信息的长度。
- **Message.decode**(reader: Reader|Uint8Array): Message    
  将 buffer 解码为**信息实例**。如果缺少必需的字段，则会抛出一个`util.ProtocolError`，并将`instance`属性设置为到目前为止已解码的信息。如果有线格式(wire format)无效，则会抛出一个`Error`。
```js
try {
  var decodedMessage = AwesomeMessage.decode(buffer);
} catch (e) {
    if (e instanceof protobuf.util.ProtocolError) {
      // e.instance 保存了到目前为止除必需字段外的解码消息
    } else {
      // 有线格式无效的话
    }
}
```
- **Message.decodeDelimited**(reader: Reader|Uint8Array): Message    
  与`Message.decode`类似，但是以[varint][varint]形式读取信息的长度。
- **Message.create**(properties: Object): Message   
  根据满足有效信息的一组属性中创建新的**信息实例**。若可以，建议首选`Message.create`而非`Message.fromObject`，因其可能不会执行冗余转换。
```js
var message = AwesomeMessage.create({ awesomeField: "AwesomeString" });
```
- **Message.fromObject**(object: Object): Message   
  使用上表中列出的转换步骤将任何无效的**简单对象**转换为**信息实例**。
```js
var message = AwesomeMessage.fromObject({ awesomeField: 42 });
// 将 awesomeField 转换为字符串
```
- **Message.toObject**(message: Message [, options: ConversionOptions]): Object       
  将**信息实例**转换为任意的**简单 JavaScript 对象**，以便与其他库或存储进行互操作。根据设置好的转换配置项，最终得到的简单 JavaScript 对象*也许会*仍然满足有效信息的要求，但大多数情况并不会这样。
```js
var object = AwesomeMessage.toObject(message, {
  enums: String,  // 以字符串名称进行枚举
  longs: String,  // 将 longs 作为字符串 (需要 long.js)
  bytes: String,  // 将字节作为 base65 编码的字符串
  defaults: true, // 包含默认值
  arrays: true,   // 填充空数组(重复字段)，即使 defaults = false
  objects: true,  // 填充空对象(映射字段)，即使 defaults = false
  oneofs: true    // 是否包括设置为当前字段名称的字段的虚拟字段
});
```

下面的图显示了不同方法之间的关系以及有效消息的概念，以供参考:

<img src="/protobuf_docs_zh_cn/images/valid_message.svg" />

> 换句话说:`verify`表明在简单对象上直接调用`create`或`encode`将各自成功地转换有效信息。另一方面，`fromObject`则从更广泛的简单对象进行转换以创建有效信息。[参考](https://github.com/dcodeIO/protobuf.js/issues/748#issuecomment-291925749)











