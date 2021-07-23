//入口文件
import "./mock"
import Vue from 'vue'
import App from './App.vue'
// import App1 from './App1.vue'
import store from "./store"
import './styles/global.less'
import router from "./router/index"
import "./eventBus"
store.dispatch("setting/fetchSetting")
//控制台代码提示 可以不要
// Vue.config.productionTip = false
import showMessage from './utils/showMessage'
Vue.prototype.$showMessage = showMessage

//注册全局指令
import vloading from "./directive/loading"
import vlazy from "./directive/lazy"
Vue.directive("loading", vloading)
Vue.directive("lazy", vlazy)
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')


//触发登录状态
// store.dispatch('loginUser/whoAmI')
// new Vue({
//   store,
//   router,
//   render: h => h(App1),
// }).$mount('#app')

// import { getProject } from "./api/project"
// getProject().then((r) => {
//   console.log(r)
// })