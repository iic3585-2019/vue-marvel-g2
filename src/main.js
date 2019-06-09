import Vue from 'vue';
import App from './App.vue';
import store from './store/index';
import router from './router';
import './registerServiceWorker';

// Stylesheets
import '@/assets/stylesheets/index.sass';

// External modules:
// - Anime (https://github.com/juliangarnier/anime)
import anime from 'animejs';
Vue.prototype.$a = anime;

// - Lodash (https://github.com/lodash/lodash)
import _ from 'lodash';
Vue.prototype.$_ = _;

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
