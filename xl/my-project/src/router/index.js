import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Wode from '@/components/Wode'
import Class from '@/components/Class'
import Collection from '@/components/Collection'
import Footer from '@/components/Footer'
import LoadPage from '@/components/LoadPage'
import Index from 'pages/home/index'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'index',
      components:{
      	content:Index,
      }
    },
     {
      path: '/home',
      name: 'home',
      components:{
      	content:Home,
      	footer:Footer
      }
    },
    {
      path: '/wode',
      name: 'wode',
      components:{
      	content:Wode,
      	footer:Footer
      }
    },
    {
      path: '/classification',
      name: 'classification',
      components:{
      	content:Class,
      	footer:Footer
      }
    },
    {
      path: '/collection',
      name: 'collection',
      components:{
      	content:Collection,
      	footer:Footer
      }
    }
  ]
})
