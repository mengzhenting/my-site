import Vue from "vue"
import VueRouter from "vue-router"
import routes from "./routes"
// import store from "../store"
import { titleController } from "@/utils";

//打包用cdn，为避免全局变量污染
if (!window.VueRouter) {
    Vue.use(VueRouter);
}

var router = new VueRouter({
    mode: 'history',
    routes,
});
//路由跳转过后做的事情，改动标题
router.afterEach((to, from) => {
    if (to.meta.title) {
        titleController.setRouteTitle(to.meta.title)
    }
})
//登录
// router.beforeEach((to, from, next) => {
//     if (to.meta.auth) {
//         //需要鉴权,进去鉴权流程
//         const status = store.getters["loginUser/status"]
//         if (status == 'loading') {
//             //加载中，无法确定是否登录
//             next({
//                 path: 'loading',
//                 query: {
//                     returnurl: to.fullPath
//                 }
//             })
//         } else if (status == "login") {
//             //登录过了
//             next();
//         } else {
//             alert('请登录')
//             next({
//                 path: '/login',
//                 query: {
//                     returnurl: to.fullPath
//                 }
//             })
//         }
//     } else {
//         next()
//     }
// })
export default router;