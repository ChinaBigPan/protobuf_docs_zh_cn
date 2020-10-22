---
title: 命令行
---

# 命令行

[英文原地址](https://github.com/protobufjs/protobuf.js#command-line)

命令行接口(CLI，Command Line Interface)可用于转换文件之间的格式，并生成静态代码以及 TypeScript 的定义。

## JavaScript

```bash
  # 转换文件格式并生成静态代码。

  -t, --target     # 指定目标格式。也接受需要自定义目标的路径。

                   json          # JSON 表示
                   json-module   # JSON 表示为模块
                   proto2        # Protocol Buffers, 版本 2
                   proto3        # Protocol Buffers, 版本 3
                   static        # 无反射静态代码(本身是无功能的)
                   static-module # 作为模块的无反射静态代码

  -p, --path       # 将目录添加到要包含的路径.

  -o, --out        # 保存到一个文件，而非写到标准输出流中.

  --sparse         # 仅导出从主文件引用的那些类型(实验功能) 

  # 仅模块目标:

  -w, --wrap       # 指定要使用的封装。还接受引入自定义封装的路径。 

                   default   # 默认封装支持 CommonJS 和 AMD
                   commonjs  # CommonJS 
                   amd       # AMD 
                   es6       # ES6
                   closure   # 添加到 protobuf.roots 的闭包，protobuf 是全局变量 

  -r, --root       # 指定 protobuf.roots 的名称

  -l, --lint       # Linter 的配置. 默认采用 protobuf.js-compatible 规则：
                   # eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins

  --es6            # 启用 ES6 语法 (const/let 代替 var)

  # 仅针对 Proto :

  --keep-case      # 保持原字段大小写，并不会转换为驼峰 

  # 仅针对静态目标：

  --no-create      # 不生成用于反射兼容性的创建函数.
  --no-encode      # 不生成编码函数.
  --no-decode      # 不生成解码函数.
  --no-verify      # 不生成验证函数.
  --no-convert     # 不生成类似 from/foObject 的转换函数
  --no-delimited   # 不生成带分隔符的编码/解码函数.
  --no-beautify    # 不美化生成的代码.
  --no-comments    # 不输出任何 JSDoc 注释

  --force-long     # 强制对 s-/u-/int64 和 s-/fixed64 字段使用 Long.
  --force-number   # 强制对 s-/u-/int64 和 s-/fixed64 字段使用 number.
  --force-message  # 强制使用信息实例而非普通对象.

#用法: 
pbjs [options] file1.proto file2.json ...  (or pipe)  other | pbjs [options] -
```

于生产环境，建议将所有的`.proto`文件绑定到一个`.json`文件中，这样可以最小化网络请求的数量，并避免任何解析器开销(提示:只使用light库):

```bash
$> pbjs -t json file1.proto file2.proto > bundle.json
```

现在，在你的打包文件中引入这个文件：

```js
var root = protobuf.Root.fromJSON(require("./bundle.json"));
```

或者用通常的方式加载:

```js
protobuf.load("bundle.json", function(err, root) {
    // ...
});
```

另一方面，只使用`minimal`库生成的静态代码。例如：

```bash
$> pbjs -t static-module -w commonjs -o compiled.js file1.proto file2.proto
```

这将为`file1.proto`和`file2.proto`中的定义生成静态代码，并编译为一个`CommonJS`模块`compiled.js`。

**咚咚咚！** 使用`/** ... */`块或尾部添加`/// ...`行来标识的`.proto`文件会转化为生成的静态代码。

## TypeScript

```bash
  # 从带注释的 JavaScript 文件生成 TypeScript 定义

  -o, --out       # 保存到一个文件，而非写到标准输出流中.

  -g, --global    # 浏览器环境中全局对象的名称(如果有的话).

  --no-comments   # 不输出任何 JSDoc 注释.

  # 内部参数:

  -n, --name      # 将所有内容封装在具有指定名称的模块中.

  -m, --main      # 是否在没有任何导入的情况下构建主库.

  # 用法： 
  pbts [options] file1.js file2.js ...  (or)  other | pbts [options] -
```

参照上面的例子，下面的代码不仅生成了 CommonJS 模块的静态代码`compiled.js`，还生成了相应的 TypeScript 定义文件`compiled.d.ts`:

```bash
$> pbjs -t static-module -w commonjs -o compiled.js file1.proto file2.proto
$> pbts -o compiled.d.ts compiled.js
```

此外，静态模块的 TypeScript 定义与基于反射的对应组件(即由 JSON 模块导出)兼容，只要满足以下条件:

1. 不要使用`new SomeMessage(...)`，而应该使用`SomeMessage.create(...)`因为反射对象并不会提供构造函数。
2. 类型、服务和枚举必须以大写字母开头才可以作为反射类型的属性(即能够使用`MyMessage.MyEnum`而非`root.lookup("MyMessage.MyEnum")`)。

例如，下面的指令生成一个 JSON 模块`bundle.js`和一个`bundle.d.ts`，但没有静态代码:

```bash
$> pbjs -t json-module -w commonjs -o bundle.js file1.proto file2.proto
$> pbjs -t static-module file1.proto file2.proto | pbts -o bundle.d.ts -
```

## 反射与静态代码

虽然直接使用`.proto`文件分别需要支持纯反射的的完整库/JSON 的 light 库，但是除了相对简短的描述符之外，几乎所有的代码都是共享的。

另一方面，静态代码只需 minimal 库就可以，但会生成没有任何反射特性的附加源代码。这也意味着存在一个盈亏平衡点，即当生成的代码数量超过完整的 light 库的大小时，静态生成的代码就会大于基于描述符的代码。

在性能方面并没有太大的区别，因为静态生成的代码与运行时生成的代码基本相同，而且正如前一节所示，两者在很大程度上是可互换的。

| 资源 | 库 | 优点 | 权衡 |
|:---:|:---:|---|---|
| .proto | full | 易于编辑<br />与其他库的互操作性<br />没有编译步骤 | 一些解析和可能的网络开销 |
| JSON | light | 易于编辑<br />没有解析开销<br />单个包(无网络开销) | 特定的 protobuf.js<br />需要编译步骤 |
| static | minimal | 可以在`eval`访问受限的地方工作<br />完全文档化<br />小 proto 占用更小 | 很难编辑<br />无反射<br />需要编译步骤 |
 
## Command line API

这两个实用程序可以通过提供命令行参数和回调各自的`main`函数来使用:

```js
var pbjs = require("protobufjs/cli/pbjs"); // 或 require("protobufjs/cli").pbjs / .pbts

pbjs.main([ "--target", "json-module", "path/to/myproto.proto" ], function(err, output) {
    if (err)
        throw err;
    // 使用输出搞事情
});
```














