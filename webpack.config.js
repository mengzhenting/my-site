const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
//再生产环境下
if (process.env.NODE_ENV === "production") {
    module.exports = {
        plugins: [new BundleAnalyzerPlugin()],
        externals: {
            vue: "Vue",
            vuex: "Vuex",
            "vue-router": "VueRouter",
            axios: "axios",
        }
    }
} else {
    // 开发环境下
    module.exports = {}
}