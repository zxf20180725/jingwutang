import Vue from 'vue'
import Router from 'vue-router'
import RouterConfig from './modules/index.js' // 引入业务逻辑模块
import CommonRouters from './common'

Vue.use(Router)

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: RouterConfig.concat(CommonRouters)
})
