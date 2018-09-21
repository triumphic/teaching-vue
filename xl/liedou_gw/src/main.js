// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' 
import VueRouter from 'vue-router'
import Fastclick from 'fastclick'
import '@/assets/common/reset.css'

Fastclick.attach(document.body)
Vue.config.productionTip = false
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
