import Vue from 'vue';
import App from './App.vue';
import router from '@/routes/';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/reset.css';
import 'element-ui/lib/theme-chalk/index.css';
import infiniteScroll from 'vue-infinite-scroll';

Vue.use(infiniteScroll);
Vue.use(ElementUI);
Vue.config.productionTip = process.env.NODE_ENV !== 'production';

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
