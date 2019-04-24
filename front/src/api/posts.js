import axios from './config';
import Vapi from 'vuex-rest-api';

const RESOURCE_NAME = '/posts';

const options = {
  axios: axios
};

const posts = new Vapi({
  state: {
    posts: []
  },
  ...options
})
  .get({
    action: 'getPost',
    property: 'post',
    path: ({ id }) => `${RESOURCE_NAME}/${id}`
  })
  .get({
    action: 'getPosts',
    property: 'posts',
    path: () => RESOURCE_NAME
  })
  .post({
    action: 'postPost',
    property: 'post',
    path: (id) => `${RESOURCE_NAME}/${id}`
  })
  .getStore();

export default posts;
