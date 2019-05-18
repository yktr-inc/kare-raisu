import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home.vue';

import NotFound from '@/views/errors/NotFound.vue';
import LayoutDefault from '@/layouts/LayoutDefault.vue';
import LayoutModal from '@/layouts/LayoutModal.vue';

import usersRoutes from '@/routes/users';
import PostsRoutes from '@/routes/posts';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      component: LayoutDefault,
      path: '',
      children: [
        {
          path: '/',
          name: 'home',
          component: Home,
          meta: {
            auth: true,
          },
        },
        ...usersRoutes,
        ...PostsRoutes,
      ],
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
});


export default router;
