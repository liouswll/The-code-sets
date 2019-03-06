import Vue from 'vue'
import Router from 'vue-router'
import headview  from '@/components/headview/'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:headview,
      component:headview
    }
  ]
})
