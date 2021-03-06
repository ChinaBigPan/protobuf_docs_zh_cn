module.exports= {
    title: 'protobuf.js',
    description: "protobuf.js 是由 TypeScript 编写的纯 JavaScript 实现 Protocol Buffers 的框架，支持 node.js 和浏览器。",
    base: '/protobuf_docs_zh_cn/',
    markdown: {
        lineNumbers: true,
        anchor: {
            permalink: false
        }
    },
    themeConfig: {
        activeHeaderLinks: true,
        displayAllHeaders: true,
        logo: "/images/logo.png",
        nav: [
            {
                text: "大笑文档",
                link: "http://www.febeacon.com"
            },
            {
                text: "文档首页",
                link: "/"
            }
        ],
        sidebar: [
            {
                title: '开始',
                path: '/routes/',
                sidebarDepth: 2
            },
            {
                title: '安装',
                path: '/routes/installation',
                sidebarDepth: 2
            },
            {
                title: '使用',
                path: '/routes/usage',
                sidebarDepth: 2
            },
            {
                title: '示例',
                path: '/routes/examples',
                sidebarDepth: 2
            },
            {
                title: "命令行",
                path: '/routes/command_line',
                sidebarDepth: 2
            },
            {
                title: "性能",
                path: '/routes/performance',
                sidebarDepth: 2
            },
            {
                title: "构建",
                path: '/routes/building',
                sidebarDepth: 2
            }
        ]
    },
    head: [
        ["link", {
            rel: "icon", href: "/images/favicon.ico"
        }]
    ]
}