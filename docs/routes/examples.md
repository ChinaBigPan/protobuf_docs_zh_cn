---
title: 示例
---

# 示例

[英文原地址](https://github.com/protobufjs/protobuf.js#examples)

## 使用`.proto`文件

可以使用完整版的库来加载现有的`.proto`文件，它会解析和编译定义以准备使用(基于反射的)消息类:

```js
// awesome.proto
package awesomepackage;
syntax = "proto3";

message AwesomeMessage {
    string awesome_field = 1; // becomes awesomeField
}
```

```js
protobuf.load("awesome.proto", function(err, root) {
    if (err)
        throw err;

    // 获得 message 类型
    var AwesomeMessage = root.lookupType("awesomepackage.AwesomeMessage");

    // 有效载荷
    var payload = { awesomeField: "AwesomeString" };

    // 验证有效负载(如可能不完整或无效)
    var errMsg = AwesomeMessage.verify(payload);
    if (errMsg)
        throw Error(errMsg);

    // 创建新 message
    var message = AwesomeMessage.create(payload); // 或使用 .fromObject 如果转换是必要的

    // 将 message 转换为 Uint8Array (浏览器) 或 Buffer (node)
    var buffer = AwesomeMessage.encode(message).finish();
    // 使用 buffer 搞事情...

    // 将 Uint8Array (浏览器) 或 Buffer (node) 解码为 message
    var message = AwesomeMessage.decode(buffer);
    // 使用 message 搞事情...

    // 如果应用程序使用了长度分隔的 buffer，那么也会有 encodeDelimited 的 buffer 和 decodeDelimited 的 buffer。

    // 可以将 message 转换回简单对象
    var object = AwesomeMessage.toObject(message, {
        longs: String,
        enums: String,
        bytes: String,
        // 参见 ConversionOptions
    });
});
```

此外，可以使用期约(Promise)语法来替代回调：

```js
protobuf.load("awesome.proto")
    .then(function(root) {
       // ...
    });
```

## 使用 JSON 格式

该库利用了与`.proto`定义相同的 JSON 格式。例如，下面的定义与上面看到的`.proto`定义相同：

```json
{
  "nested": {
    "awesomepackage": {
      "nested": {
        "AwesomeMessage": {
          "fields": {
            "awesomeField": {
              "type": "string",
              "id": 1
            }
          }
        }
      }
    }
  }
}
```

JSON 格式非常类似于内部反射结构：

| 类型(T) | 扩展 | 指定类型的属性 |
|:---:|:---:|---|
| *ReflectionObject* | | options | 
| *Namespace* | *ReflectionObject* | nested |
| Root | *Namespace* | **nested** |
| Type | *Namespace* | **fields** |
| Enum | *ReflectionObject* | **values** |
| Field | *ReflectionObject* | rule, **type**, **id** |
| MapField | Field | **keyType** |
| OneOf | *ReflectionObject* | **oneof** (字段名数组) |
| Service | *Namespace* | **methods** |
| Method | *ReflectionObject* | type, **requestType**, **responseType**, requestStream, responseStream |

- 上表中**加粗的属性**是必需属性，*斜体*是抽象的。
- `T.fromJSON(name, json)`根据 JSON 格式创建相应的反射对象。
- `T#toJSON()`根据相应的反射对象创建 JSON 格式(其名称用作父对象中的键)。

[light库]:https://github.com/dcodeIO/protobuf.js/tree/master/dist/light
  
如果您只用 JSON 格式而并不使用`.proto`文件，那么使用[light库][light库]即可(本例中不需要解析器)。

JSON 文件使用通常方法加载即可：

```js
protobuf.load("awesome.json", function(err, root) {
    if (err) throw err;

    // 继续上面的"获取信息类型"
});
```

也可以内联加载：

```js
var jsonDescriptor = require("./awesome.json"); // node 示例

var root = protobuf.Root.fromJSON(jsonDescriptor);

// 继续上面的"获取信息类型"
```

## 仅使用反射

完全版的库和 light 库都支持反射。举个例子，我们可以仅使用反射来定义上面例子中看到的`.proto`定义。

```js
// ...
var Root  = protobuf.Root,
    Type  = protobuf.Type,
    Field = protobuf.Field;

var AwesomeMessage = new Type("AwesomeMessage").add(new Field("awesomeField", 1, "string"));

var root = new Root().define("awesomepackage").add(AwesomeMessage);

// 继续上面的 "创建一个新信息"
// ...
```

有关反射结构的详细信息可以在[API文档](https://github.com/protobufjs/protobuf.js#additional-documentation)中找到。

## 使用自定义类

Message 类也可以扩展自定义功能，还可以注册一个自定义构造函数来反射消息类型:

```js
// ...
// 定义自定义构造器
function AwesomeMessage(properties) {
    // 自定义初始化代码
    // ...
}

// 使用反射类型注册自定义构造器
root.lookupType("awesomepackage.AwesomeMessage").ctor = AwesomeMessage;

// 定义自定义函数
AwesomeMessage.customStaticMethod = function() { ... };
AwesomeMessage.prototype.customInstanceMethod = function() { ... };

// 继续上面的 "创建一个新信息"
```

(*) 除了通过`AwesomeMessage.$type`和`AwesomeMesage#$type`引用其反射类型，相应的自定义类被自动填充为：

- `AwesomeMessage.create`
- `AwesomeMessage.encode`和`AwesomeMessage.encodeDelimited`
- `AwesomeMessage.decode`和`AwesomeMessage.decodeDelimited`
- `AwesomeMessage.verify`
- `AwesomeMessage.fromObject`、`AwesomeMessage.toObject`和`AwesomeMessage#toJSON`

然后，这种类型的解码信息就成为`instanceof AwesomeMessage`

或者，如果不需要自定义初始化代码，也可以重用和扩展内部构造函数：

```js
// ...

// 重用内部构造函数
var AwesomeMessage = root.lookupType("awesomepackage.AwesomeMessage").ctor;

// 定义自定义函数
AwesomeMessage.customStaticMethod = function() { ... };
AwesomeMessage.prototype.customInstanceMethod = function() { ... };

// 继续上面的 "创建一个新信息"
```

## 使用服务

该库也支持使用服务但是不对实际的传输通道做任何假设。相反，用户必须提供一个合适的 RPC 实现。该实现是一个异步函数，以反射的服务方法、二进制请求和 node 式回调作为其参数：

```js
function rpcImpl(method, requestData, callback) {
    // 例如，使用 HTTP 请求或 WebSocket 执行请求
    var responseData = ...;
    // 用二进制响应调用回调
    callback(null, responseData);
}
```

下面是使用 TypeScript 实现的使用 grpc npm 包的示例：

```ts
const grpc = require('grpc')

const Client = grpc.makeGenericClientConstructor({})
const client = new Client(
  grpcServerUrl,
  grpc.credentials.createInsecure()
)

const rpcImpl = function(method, requestData, callback) {
  client.makeUnaryRequest(
    method.name,
    arg => arg,
    arg => arg,
    requestData,
    callback
  )
}
```

示例：

```js
// greeter.proto
syntax = "proto3";

service Greeter {
    rpc SayHello (HelloRequest) returns (HelloReply) {}
}

message HelloRequest {
    string name = 1;
}

message HelloReply {
    string message = 1;
}
```

```js
// ...
var Greeter = root.lookup("Greeter");
var greeter = Greeter.create(/* see above */ rpcImpl, /* request delimited? */ false, /* response delimited? */ false);

greeter.sayHello({ name: 'you' }, function(err, response) {
    console.log('Greeting:', response.message);
});
```

当然也支持期约(promise):

```js
greeter.sayHello({ name: 'you' })
    .then(function(response) {
        console.log('Greeting:', response.message);
    });
```

这里有一个[流式 RPC 的示例](https://github.com/dcodeIO/protobuf.js/blob/master/examples/streaming-rpc.js)

请注意，服务 API 是为客户端设计的。实现一个服务器端接入点几乎总是需要特定的传输通道(如 http, websocket 等)代码，唯一的共同点是它对信息进行解码和编码。

## 搭配 TypeScript

[long.js]:https://github.com/dcodeIO/long.js

该库附带了自己的[类型定义文件](https://github.com/dcodeIO/protobuf.js/blob/master/index.d.ts)，而[VS Code](https://code.visualstudio.com/)这样的现代编辑器将自动检测并使用它们来完成代码。

由于`Buffer`的原因，该 npm 包依赖了[@types/node](https://www.npmjs.com/package/@types/node)，同样因为`Long`的原因，也依赖了[@types/long](https://www.npmjs.com/package/@types/long)。如果您并不是为 node 构建或/且不使用[long.js][long.js]，那么建议您手动排除它们。

### 使用 JS API

[typings file generated for its static counterpart]:https://github.com/protobufjs/protobuf.js#pbts-for-typescript

上面显示的 API 与 TypeScript 的工作原理基本相同。但是，因为所有内容都是有类型的，所以访问动态生成的`message`类实例上的字段需要使用括号符号(即`message["awesomeField"]`)或显式数据类型转换。另外，也可以使用[静态类型文件][typings file generated for its static counterpart]。

```js
import { load } from "protobufjs"; // respectively "./node_modules/protobufjs"

load("awesome.proto", function(err, root) {
  if (err)
    throw err;

  // example code
  const AwesomeMessage = root.lookupType("awesomepackage.AwesomeMessage");

  let message = AwesomeMessage.create({ awesomeField: "hello" });
  console.log(`message = ${JSON.stringify(message)}`);

  let buffer = AwesomeMessage.encode(message).finish();
  console.log(`buffer = ${Array.prototype.toString.call(buffer)}`);

  let decoded = AwesomeMessage.decode(buffer);
  console.log(`decoded = ${JSON.stringify(decoded)}`);
});
```

### 使用生成的静态代码

如果您使用 CLI 生成静态代码和类型定义文件到`bundlejs`和`bundle.d.ts`，那么您可以做:

```ts
import { AwesomeMessage } from "./bundle.js";

// example code
let message = AwesomeMessage.create({ awesomeField: "hello" });
let buffer  = AwesomeMessage.encode(message).finish();
let decoded = AwesomeMessage.decode(buffer);
```

### 使用装饰器

该库还包括了装饰器的早期实现。

请注意，装饰器是 TypeScript 的一个实验性特性，声明顺序取决于 JS 目标。举个例子：`@Field.d(2, AwesomeArrayMessage)`，这意味着`AwesomeArrayMessage`在之前针对`ES5`定义过。

```ts
import { Message, Type, Field, OneOf } from "protobufjs/light"; // respectively "./node_modules/protobufjs/light.js"

export class AwesomeSubMessage extends Message<AwesomeSubMessage> {

  @Field.d(1, "string")
  public awesomeString: string;

}

export enum AwesomeEnum {
  ONE = 1,
  TWO = 2
}

@Type.d("SuperAwesomeMessage")
export class AwesomeMessage extends Message<AwesomeMessage> {

  @Field.d(1, "string", "optional", "awesome default string")
  public awesomeField: string;

  @Field.d(2, AwesomeSubMessage)
  public awesomeSubMessage: AwesomeSubMessage;

  @Field.d(3, AwesomeEnum, "optional", AwesomeEnum.ONE)
  public awesomeEnum: AwesomeEnum;

  @OneOf.d("awesomeSubMessage", "awesomeEnum")
  public which: string;

}

// example code
let message = new AwesomeMessage({ awesomeField: "hello" });
let buffer  = AwesomeMessage.encode(message).finish();
let decoded = AwesomeMessage.decode(buffer);
```

支持的装饰器包括：

- `Type.d(typeName?: string)` (可选)    
  将类注释为`protobuf`信息类型。如果没有指定`typeName`，则会将构造函数的运行时函数名用于反射类型。

- `Field.d<T>(fieldId: number, fieldType: string | Constructor<T>, fieldRule?: "optional" | "required" | "repeated", defaultValue?: T)`
  将属性注释为具有指定`id`和`protobuf`类型的`protobuf`字段。    
- `MapField.d<T extends { [key: string]: any }>(fieldId: number, fieldKeyType: string, fieldValueType. string | Constructor<{}>)`
  将属性注释为具有指定`id`、`protobuf`键和值类型的`protobuf`映射字段。
- `OneOf.d<T extends string>(...fieldNames: string[])`    
  将属性注释为覆盖指定字段的`protobuf oneof`。

另外：

- 修饰的类型使用平面结构放置在`protobuf.roots["decorated"]`中，因此不会有重复的名称。
- `Enum`会在装饰器求值时被复制到带有泛型名称的反射枚举，因为引用的枚举对象并没有装饰器可以使用的运行时名称。
- 默认值必须指定为装饰器的参数，而不是使用属性初始化来实现正确的原型行为。
- 修饰类上的属性名不能在编译时重命名(例如通过一个小的修饰符)，因为修饰符只接收字符串作为原始字段名。

那啥，虽然不太好看，不过在[原生 JavaScript 中使用装饰器](https://github.com/dcodeIO/protobuf.js/blob/master/examples/js-decorators.js)也是可以的。









