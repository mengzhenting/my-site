import Vuex from "vuex"
import Vue from "vue"
import loginUser from "./loginUser"
import banner from "./banner"
import setting from "./setting"
import about from "./about"
import project from "./project"

//打包用cdn，为避免全局变量污染
if (!window.VueX) {
    Vue.use(Vuex)
}


const store = new Vuex.Store({
    modules: {
        loginUser,
        banner,
        setting,
        about,
        project,
    },
    strict: true,//开启严格模式后只允许通过mutation改变状态
});
export default store