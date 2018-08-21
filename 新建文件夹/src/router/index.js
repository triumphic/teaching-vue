import Vue from 'vue'
import Router from 'vue-router'
import InvitingRegiment from '@/components/InvitingRegiment'
import HelpCollage from '@/components/HelpCollage' 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'InvitingRegiment',
      component: InvitingRegiment
    },
    {
      path: '/helpCollage',
      name: 'helpCollage',
      component: HelpCollage
    },
  ]
})
