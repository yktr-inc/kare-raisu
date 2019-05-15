import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home.vue';
import Profile from '@/views/Profile.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import Settings from '@/views/Settings.vue';

import NotFound from '@/views/errors/NotFound.vue';

import LayoutDefault from '@/layouts/LayoutDefault.vue';
import LayoutModal from '@/layouts/LayoutModal.vue';

import store from '@/store';

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
            auth: true
          }
        },
      ]
    },
    {
      component: LayoutDefault,
      path: '',
      children: [
        {
          path: '/settings',
          name: 'settings',
          component: Settings,
          meta: {
            auth: true
          }
        }
      ]
    },
    {
      component: LayoutDefault,
      path: '',
      children: [
        {
          path: '/profile',
          name: 'profile',
          component: Profile,
          meta: {
            auth: true
          }
        }
      ]
    },
    {
      component: LayoutDefault,
      path: '',
      children: [
        {
          path: '/login',
          name: 'login',
          component: Login,
          meta: {
            auth: true
          }
        }
      ]
    },
    {
      component: LayoutDefault,
      path: '',
      children: [
        {
          path: '/register',
          name: 'register',
          component: Register,
          meta: {
            auth: true
          }
        }
      ]
    },
    {
      path: '*',
      component: NotFound
    }
  ]
});

export default router;
