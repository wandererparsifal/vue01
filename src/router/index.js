import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import GoodsDetail from '@/pages/GoodsDetail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/detail',
      name: 'GoodsDetail',
      component: GoodsDetail,
    },
  ],
});
