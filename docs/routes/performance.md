---
title: 性能
---

# 性能

[英文原地址](https://github.com/protobufjs/protobuf.js#performance)

[Google's JS implementation]:https://github.com/google/protobuf/tree/master/js

该库包含了一个基准测试，可以比较原生 JSON 和[谷歌的JS实现][Google's JS implementation]的性能。在 i7-2600K 上 node 6.9.1 运行，会生成:

```bash
benchmarking encoding performance ...

protobuf.js (reflect) x 541,707 ops/sec ±1.13% (87 runs sampled)
protobuf.js (static) x 548,134 ops/sec ±1.38% (89 runs sampled)
JSON (string) x 318,076 ops/sec ±0.63% (93 runs sampled)
JSON (buffer) x 179,165 ops/sec ±2.26% (91 runs sampled)
google-protobuf x 74,406 ops/sec ±0.85% (86 runs sampled)

   protobuf.js (static) was fastest
  protobuf.js (reflect) was 0.9% ops/sec slower (factor 1.0)
          JSON (string) was 41.5% ops/sec slower (factor 1.7)
          JSON (buffer) was 67.6% ops/sec slower (factor 3.1)
        google-protobuf was 86.4% ops/sec slower (factor 7.3)

benchmarking decoding performance ...

protobuf.js (reflect) x 1,383,981 ops/sec ±0.88% (93 runs sampled)
protobuf.js (static) x 1,378,925 ops/sec ±0.81% (93 runs sampled)
JSON (string) x 302,444 ops/sec ±0.81% (93 runs sampled)
JSON (buffer) x 264,882 ops/sec ±0.81% (93 runs sampled)
google-protobuf x 179,180 ops/sec ±0.64% (94 runs sampled)

  protobuf.js (reflect) was fastest
   protobuf.js (static) was 0.3% ops/sec slower (factor 1.0)
          JSON (string) was 78.1% ops/sec slower (factor 4.6)
          JSON (buffer) was 80.8% ops/sec slower (factor 5.2)
        google-protobuf was 87.0% ops/sec slower (factor 7.7)

benchmarking combined performance ...

protobuf.js (reflect) x 275,900 ops/sec ±0.78% (90 runs sampled)
protobuf.js (static) x 290,096 ops/sec ±0.96% (90 runs sampled)
JSON (string) x 129,381 ops/sec ±0.77% (90 runs sampled)
JSON (buffer) x 91,051 ops/sec ±0.94% (90 runs sampled)
google-protobuf x 42,050 ops/sec ±0.85% (91 runs sampled)

   protobuf.js (static) was fastest
  protobuf.js (reflect) was 4.7% ops/sec slower (factor 1.0)
          JSON (string) was 55.3% ops/sec slower (factor 2.2)
          JSON (buffer) was 68.6% ops/sec slower (factor 3.2)
        google-protobuf was 85.5% ops/sec slower (factor 6.9)
```

这些结果是由：

- 在运行时生成特定类型的编码器、解码器、验证器和转换器。
- 根据环境配置读写接口。
- 在有用的地方使用 node 指定的功能
- 通过自带的工具箱来避免不必要的操作。

您也可以运行[benchmark](https://github.com/dcodeIO/protobuf.js/blob/master/bench/index.js)

```bash
$> npm run bench
```

以及您自己的[分析工具](https://github.com/dcodeIO/protobuf.js/blob/master/bench/prof.js)(这需要 node 版本较新)

```bash
$> npm run prof <encode|decode|encode-browser|decode-browser> [iterations=10000000]
```

请注意，在撰写本文时，基准测试套件在 node 7.2.0 上的执行速度明显慢于 6.9.1，这是由于时间的原因。













