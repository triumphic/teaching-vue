import Vue from 'vue'
import Router from 'vue-router'
import Pc from '@/components/pc/index'
import Move from '@/components/move/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pc',
      component: Pc
    }
  ]
})
