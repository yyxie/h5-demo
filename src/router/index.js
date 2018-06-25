import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import {Lazyload} from 'vant';

Vue.use(Router);
Vue.use(Lazyload)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Index
    }
  ]
})
