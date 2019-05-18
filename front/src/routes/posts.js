import ShowPost from '@/views/posts/Show.vue';
import CreatePost from '@/views/posts/Create.vue';

const routes = [
  {
    path: '/posts/create',
    name: 'posts.create',
    component: CreatePost,
    meta: {
      auth: true,
    },
  },
  {
    path: '/posts/:id',
    name: 'posts.show',
    component: ShowPost,
    meta: {
      auth: true,
    },
  },
];


export default routes;
