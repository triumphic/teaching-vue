// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { Vue } from '@/assets/config/config.js'
import App from './App'
import router from './router'
import store from './store/vuex.js'
import 'jquery'
import  Fastclick from 'fastclick'
import VueClipboard from 'vue-clipboard2'
import Mint from 'mint-ui';
Vue.use(Mint);

Fastclick.attach(document.body)
Vue.use(VueClipboard)
import '@/assets/css/reset.css'
import '@/assets/css/swiper-3.4.2.min.css'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
