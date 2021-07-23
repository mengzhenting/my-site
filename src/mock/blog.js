import Mock from "mockjs"
import qs from "querystring"
//博客分类
Mock.mock("/api/blogtype", "get", {
    code: 0,
    msg: '我的数据',
    'data|10-20': [
        {
            'id|+1': 1,
            name: "分类@id",
            "articleCount|0-300": 0,
            "order|+1": 1
        }
    ]
})

//文章
Mock.mock(/^\/api\/blog(\?.+)?$/, "get", function (options) {
    const query = qs.parse(options.url)
    return Mock.mock({
        code: 0,
        msg: '我的数据',
        data: {
            "total|2000-3000": 0,
            [`rows|${query.limit || 10}`]: [{
                id: "@guid",
                title: "@ctitle(1,50)",
                description: "@cparagraph(1,10)",
                category: {
                    "id|1-10": 0,
                    name: "分类@id",
                },
                "scanNumber|0-3000": 0,
                "commentNumber|0-300": 30,
                "thumb|1": ["@image(300x250, @color,#fff, @natural)"],
                createDate: `@date('T')`,
            }]
        },
    });
});

//单个文章详情页
Mock.mock(/^\/api\/blog\/[^/]+$/, "get", {
    code: 0,
    msg: "",
    data: {
        id: "@guid",
        title: "CORS跨域方案详解",
        category: {
            "id|1-10": 1,
            name: "分类@id",
        },
        description: "@cparagraph(1,10)",
        "scanNumber|0-10000": 0,
        "commentNumber|0-100": 0,
        createDate: "@date('T')",
        toc: [
            { name: "概述", anchor: "article-md-title-1" },
            {
                name: "简单请求", anchor: "article-md-title-2",
                children: [
                    { name: "简单请求的判定", anchor: "article-md-title-3" },
                    { name: "简单请求的交互规范", anchor: "article-md-title-4" }
                ],
            },
            {
                name: "需要预检的请求", anchor: "article-md-title-5",
            },
            {
                name: "附带身份凭证的请求", anchor: "article-md-title-6",
            },
            {
                name: "一个额外的补充", anchor: "article-md-title-7",
            },
        ],
        "thumb|1": [Mock.Random.image("300x250", "#000",
            "#fff", "Random Image"), null],
        htmlContent: `
        <div><h1 id="article-md-title-1">概括</h1>
        <p>我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容</p></div>
        <div><h1 id="article-md-title-2">简单请求</h1>
        <p>我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容</p>
        <div><h1 id="article-md-title-3">简单请求的判定</h1>
        <p>我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容</p></div>
        <div><h1 id="article-md-title-4">简单请求的交互规范</h1>
        <p>我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容</p></div>
        </div>
        <div><h1 id="article-md-title-5">需要预检的请求</h1>
        <p>我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容</p></div>
        <div><h1 id="article-md-title-6">附带身份凭证的请求</h1>
        <p>我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容</p></div>
        <div><h1 id="article-md-title-7">一个额外的补充</h1>
        <p>我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容</p></div>
        
        `
    }
})

//提交评论
Mock.mock("/api/comment", "post", {
    code: 0,
    msg: "",
    data: {
        id: "@guid",
        nickname: "@cname",
        content: "@cparagraph(1,10)",
        createDate: Date.now(),
        "avatar|1": [
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg",
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg",
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg",
        ]
    }
})

//分页获取评论
Mock.mock(/^\/api\/comment\/?(\?.+)?$/, "get", function (options) {
    const query = qs.parse(options.url)
    return Mock.mock({
        code: 0,
        msg: '我的数据',
        data: {
            total: 52,
            [`rows|${query.limit || 10}`]: [{
                id: "@guid",
                nickname: "@cname",
                content: "@cparagraph(1,10)",
                createDate: Date.now(),
                "avatar|1": [
                    "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
                    "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg",
                    "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg",
                    "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg",
                ]
            }]
        },
    });
})