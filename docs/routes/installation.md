---
title: 安装
---

# 安装

[英文原地址](https://github.com/protobufjs/protobuf.js#installation)

## Node.js

```bash
npm install protobufjs [--save --save-prefix=~]
```

```js
var protobuf = require("protobufjs");
```

::: tip 请注意
由于历史原因，这个库的版本控制方案与`semver`不兼容。为了保证向后兼容性，请依赖于`~6.A.B`而非`^6.A.B`(这就是为什么上面添加了`--save-prefix`)。
:::

## 浏览器

开发:

```html
<script src="//cdn.rawgit.com/dcodeIO/protobuf.js/6.X.X/dist/protobuf.js"></script>
```

生产：

```html
<script src="//cdn.rawgit.com/dcodeIO/protobuf.js/6.X.X/dist/protobuf.min.js"></script>
```

**要用项目所依赖的确切版本来替换版本号标记，请谨记。**

该库支持 CommonJS 和 AMD 加载器，并全局导出了`protobuf`。

## 按需加载

[完整库]:https://github.com/dcodeIO/protobuf.js/tree/master/dist
[light库]:https://github.com/dcodeIO/protobuf.js/tree/master/dist/light
[minimal库]:https://github.com/dcodeIO/protobuf.js/tree/master/dist/minimal
[pbjs]:https://github.com/protobufjs/protobuf.js#pbjs-for-javascript

在需要考虑包容量的情况下，我们还提供了[完整库][完整库]的简化版本(gzip 后约 19kb)，它排除了部分功能：

- 当仅使用 JSON 描述符(比如，由[pbjs][pbjs]生成)和/或反射时，可以使用不含解析器的[light库][light库](gzip 后约 16kb)。CommonJS 入口为:

```js
var protobuf = require("protobufjs/light");
```

- 当只处理静态生成的代码时，可以使用[minimal库][minimal库](gzip 后约 6.5kb)，它也排除了反射。CommonJS 入口为:

```js
var protobuf = require("protobufjs/minimal");
```













