import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
    code: 0,
    msg: "",
    data: {
        avatar: "http://mdrs.yuanjin.tech/FgMwAPYq17So9nwVH44ltDHo7u3c",
        siteTitle: "我的个人空间",
        github: "https://github.com/mengzhenting",
        qq: "1206020983",
        qqQrCode: "",
        weixin: "18864411055",
        weixinQrCode: "",
        mail:"1206020983@qq.com",
        icp:"没有备案号呢",
        githubName: "孟震霆",
        favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
    }
})