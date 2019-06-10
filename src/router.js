import Vue from 'vue';
import VueRouter from 'vue-router';

// Components
import HomeView from '@/views/Home';
import GameView from '@/views/Game';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/snap',
      name: 'snap',
      component: GameView,
    },
  ],
});
