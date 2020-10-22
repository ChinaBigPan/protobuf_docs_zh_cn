---
title: 兼容性
---

# 兼容性

[英文原地址](https://github.com/protobufjs/protobuf.js#compatibility)

[using a polyfill]:https://github.com/dcodeIO/protobuf.js/blob/master/scripts/polyfill.js
[unsafe-eval]:https://developer.chrome.com/extensions/contentSecurityPolicy#relaxing-eval

- 在所有现代和不那么现代的浏览器中都能工作，IE8 就算了。
- 因为该库不依赖于`google/protobuf/descriptor.proto`，配置项是按照字面意思解析和呈现的。
- 如果环境不支持类型化数组，则将使用纯数组。
- 可以通过使用[polyfill][using a polyfill]实现对前 ES5 环境(IE8除外)的支持。
- 可以通过生成和使用静态代码来实现对内容安全策略(CSP)受限环境的支持(比如无[unsafe-eval][unsafe-eval]的 Chrome 扩展)。
- 如果需要使用正确的 64 位值(uint64, int64 等)，只需在安装[long.js](https://github.com/dcodeIO/long.js)。所有 64 位的数字将作为一个`Long`实例返回，不再是一个可能不安全的 JavaScript 数字。
- 关于`descriptor.proto`的互操作性，请参阅[ext/descriptor](https://github.com/dcodeIO/protobuf.js/tree/master/ext/descriptor)

