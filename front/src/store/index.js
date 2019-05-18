import Vue from 'vue';
import Vuex from 'vuex';
import auth from '@/store/modules/auth';
import posts from '@/api/posts';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    posts,
  },
});
