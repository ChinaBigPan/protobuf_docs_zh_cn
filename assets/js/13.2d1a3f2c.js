(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{357:function(s,t,n){"use strict";n.r(t);var a=n(43),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"性能"}},[s._v("性能")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/protobufjs/protobuf.js#performance",target:"_blank",rel:"noopener noreferrer"}},[s._v("英文原地址"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("该库包含了一个基准测试，可以比较原生 JSON 和"),n("a",{attrs:{href:"https://github.com/google/protobuf/tree/master/js",target:"_blank",rel:"noopener noreferrer"}},[s._v("谷歌的JS实现"),n("OutboundLink")],1),s._v("的性能。在 i7-2600K 上 node 6.9.1 运行，会生成:")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("benchmarking encoding performance "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\nprotobuf.js "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("reflect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" x "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("541,707")]),s._v(" ops/sec ±1.13% "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("87")]),s._v(" runs sampled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nprotobuf.js "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("static"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" x "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("548,134")]),s._v(" ops/sec ±1.38% "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("89")]),s._v(" runs sampled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nJSON "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" x "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("318,076")]),s._v(" ops/sec ±0.63% "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("93")]),s._v(" runs sampled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nJSON "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("buffer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" x "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("179,165")]),s._v(" ops/sec ±2.26% "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("91")]),s._v(" runs sampled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ngoogle-protobuf x "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("74,406")]),s._v(" ops/sec ±0.85% "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("86")]),s._v(" runs sampled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n   protobuf.js "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("static"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" was fastest\n  protobuf.js "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("reflect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" was "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.9")]),s._v("% ops/sec slower "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("factor "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n          JSON "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" was "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("41.5")]),s._v("% ops/sec slower "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("factor "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.7")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n          JSON "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("buffer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" was "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("67.6")]),s._v("% ops/sec slower "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("factor "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        google-protobuf was "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("86.4")]),s._v("% ops/sec slower "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("factor "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nbenchmarking decoding performance "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\nprotobuf.js "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("reflect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" x "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1,383")]),s._v(",981 ops/sec ±0.88% "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("93")]),s._v(" runs sampled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nprotobuf.js "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("static"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" x "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1,378")]),s._v(",925 ops/sec ±0.81% "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("93")]),s._v(" runs sampled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nJSON "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" x "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("302,444")]),s._v(" ops/sec ±0.81% "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("93")]),s._v(" runs sampled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nJSON "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("buffer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" x "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("264,882")]),s._v(" ops/sec ±0.81% "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("93")]),s._v(" runs sampled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ngoogle-protobuf x "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("179,180")]),s._v(" ops/sec ±0.64% "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("94")]),s._v(" runs sampled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n  protobuf.js "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("reflect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" was fastest\n   protobuf.js "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("static"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" was "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.3")]),s._v("% ops/sec slower "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("factor "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n          JSON "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" was "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("78.1")]),s._v("% ops/sec slower "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("factor "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.6")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n          JSON "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("buffer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" was "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80.8")]),s._v("% ops/sec slower "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("factor "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        google-protobuf was "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("87.0")]),s._v("% ops/sec slower "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("factor "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.7")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nbenchmarking combined performance "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\nprotobuf.js "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("reflect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" x "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("275,900")]),s._v(" ops/sec ±0.78% "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("90")]),s._v(" runs sampled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nprotobuf.js "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("static"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" x "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("290,096")]),s._v(" ops/sec ±0.96% "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("90")]),s._v(" runs sampled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nJSON "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" x "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("129,381")]),s._v(" ops/sec ±0.77% "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("90")]),s._v(" runs sampled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nJSON "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("buffer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" x "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("91,051")]),s._v(" ops/sec ±0.94% "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("90")]),s._v(" runs sampled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ngoogle-protobuf x "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("42,050")]),s._v(" ops/sec ±0.85% "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("91")]),s._v(" runs sampled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n   protobuf.js "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("static"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" was fastest\n  protobuf.js "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("reflect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" was "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.7")]),s._v("% ops/sec slower "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("factor "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n          JSON "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" was "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("55.3")]),s._v("% ops/sec slower "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("factor "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n          JSON "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("buffer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" was "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("68.6")]),s._v("% ops/sec slower "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("factor "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        google-protobuf was "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("85.5")]),s._v("% ops/sec slower "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("factor "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.9")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br")])]),n("p",[s._v("这些结果是由：")]),s._v(" "),n("ul",[n("li",[s._v("在运行时生成特定类型的编码器、解码器、验证器和转换器。")]),s._v(" "),n("li",[s._v("根据环境配置读写接口。")]),s._v(" "),n("li",[s._v("在有用的地方使用 node 指定的功能")]),s._v(" "),n("li",[s._v("通过自带的工具箱来避免不必要的操作。")])]),s._v(" "),n("p",[s._v("您也可以运行"),n("a",{attrs:{href:"https://github.com/dcodeIO/protobuf.js/blob/master/bench/index.js",target:"_blank",rel:"noopener noreferrer"}},[s._v("benchmark"),n("OutboundLink")],1)]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run bench\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("以及您自己的"),n("a",{attrs:{href:"https://github.com/dcodeIO/protobuf.js/blob/master/bench/prof.js",target:"_blank",rel:"noopener noreferrer"}},[s._v("分析工具"),n("OutboundLink")],1),s._v("(这需要 node 版本较新)")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run prof "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("encode"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("decode"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("encode-browser"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("decode-browser"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("iterations"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("请注意，在撰写本文时，基准测试套件在 node 7.2.0 上的执行速度明显慢于 6.9.1，这是由于时间的原因。")])])}),[],!1,null,null,null);t.default=e.exports}}]);