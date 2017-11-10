import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/pages/HelloWorld';
import GoodsDetail from '@/pages/GoodsDetail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld,
    },
    {
      path: '/detail',
      name: 'GoodsDetail',
      component: GoodsDetail,
    },
  ],
});
