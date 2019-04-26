import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/homePage/'
import mainPage from '@/components/mainPage/'
import registerPage from '@/components/register/registerPage'
import interfacePage from '@/components/interface/interfacePage'
import detailsPage from '@/components/user/detailsPage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'homePage',
      component:homePage
    },
    {
      path: '/registerPage',
      name:'registerPage',
      component:registerPage
    },
    {
      path:'/interfacePage',
      name:'interfacePage',
      component:interfacePage
    },
    {
      path:'/mainPage',
      name:'mainPage',
      component:mainPage
    },
    {
      path:'/detailsPage',
      name:'detailsPage',
      component:detailsPage
    }
  ]
})
