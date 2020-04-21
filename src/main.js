// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//引入element-ui
import ElementUI from 'element-ui'
//引入样式文件
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
//使用Vue插件
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
