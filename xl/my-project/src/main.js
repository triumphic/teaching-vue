// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { Vue } from '@/assets/config/config.js'
import App from './App'
import router from './router'
import store from 'store/vuex'
import 'jquery'
import Fastclcik from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'styles/base/border.css'
import 'styles/base/reset.css'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Fastclcik.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


