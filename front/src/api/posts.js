import Vapi from 'vuex-rest-api';
import axios from './config';

const RESOURCE_NAME = 'post';
const RESOURCE_ENDPOINT = '/posts';

const options = {
  axios,
};

const posts = new Vapi({
  state: {
    posts: [],
  },
  ...options,
})
  .get({
    action: 'getPost',
    property: RESOURCE_NAME,
    path: ({ id }) => `${RESOURCE_ENDPOINT}/${id}`,
  })
  .get({
    action: 'getPosts',
    property: `${RESOURCE_NAME}s`,
    path: ({ page }) => `${RESOURCE_ENDPOINT}?page=${page}`,
  })
  .post({
    action: 'postPost',
    property: RESOURCE_NAME,
    path: `${RESOURCE_ENDPOINT}`,
  })
  .getStore();

export default posts;
