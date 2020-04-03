// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Vuelidate from 'vuelidate';
import App from './App';
import router from './router';
import store from './store';

// eslint-disable-next-line import/first
import 'bootstrap/dist/css/bootstrap.css';
// eslint-disable-next-line import/first
import 'bootstrap-vue/dist/bootstrap-vue.css';


Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Vuelidate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
});
