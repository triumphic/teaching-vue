import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import InvitingRegiment from '@/components/InvitingRegiment'
import HelpCollage from '@/components/HelpCollage' 
import Detail from '@/components/Detail' 
//import SuccessOrder from '@/components/SuccessOrder'
import OrderEditing from '@/components/OrderEditing'
import GuideDownloadApp from '@/components/GuideDownloadApp'

Vue.use(Router)

export default new Router({
  routes: [
   {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/invitingRegiment',
      name: 'invitingRegiment',
      component: InvitingRegiment
    },
    {
      path: '/helpCollage',
      name: 'helpCollage',
      component: HelpCollage
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
//  {
//  	path: '/successOrder',
//  	name: 'successOrder',
//  	component: SuccessOrder
//  },删掉
    {
    	path: '/orderEditing',
    	name: 'orderEditing',
    	component: OrderEditing
    },
    {
    	path: '/guideDownloadApp',
    	name: 'guideDownloadApp',
    	component: GuideDownloadApp
    }
  ]
})