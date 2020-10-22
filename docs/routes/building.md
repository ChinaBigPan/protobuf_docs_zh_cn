---
title: 构建
---

# 构建

[英文原地址](https://github.com/protobufjs/protobuf.js#building)

要自己构建库或其组件，可以从 GitHub 克隆它并安装开发依赖项:

```bash
$> git clone https://github.com/dcodeIO/protobuf.js.git
$> cd protobuf.js
$> npm install
```

构建相应的开发和生产版本，并将它们的 source map 发送到`dist/`:

```bash
$> npm run build
```

构建文档至`docs/`

```bash
$> npm run docs
```

构建 TypeScript 的类型文件`index.d.ts`

```bash
$> npm run types
```

## 浏览器集成

默认情况下，`protobuf.js`会集成到任何的`browserify`构建过程中，而无需任何其他模块。因此:

- 如果需要 int64 支持，那就需要在项目中的某个地方使用`long`模块，否则它会被排除在外的。这里我们假设存在一个全局的`require`函数，`protobuf.js`可以调用该函数来获得`long`模块。    
  如果绑定后没有全局`require`函数，也可以手动分配`long`模块:
```js
var Long = ...;

protobuf.util.Long = Long;
protobuf.configure();
```
- 如果您有任何特殊要求，请参考[这里](https://github.com/dcodeIO/protobuf.js/blob/master/scripts/bundle.js)。










