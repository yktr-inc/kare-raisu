import Profile from '@/views/users/Profile.vue';
import Login from '@/views/users/Login.vue';
import Register from '@/views/users/Register.vue';
import Settings from '@/views/users/Settings.vue';

const routes = [
  {
    path: '/settings',
    name: 'users.settings',
    component: Settings,
    meta: {
      auth: true,
    },
  },
  {
    path: '/profile',
    name: 'users.profile',
    component: Profile,
    meta: {
      auth: true,
    },
  },
  {
    path: '/login',
    name: 'users.login',
    component: Login,
    meta: {
      auth: true,
    },
  },
  {
    path: '/register',
    name: 'users.register',
    component: Register,
    meta: {
      auth: true,
    },
  },
];

export default routes;
