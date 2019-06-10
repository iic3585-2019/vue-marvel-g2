import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// Store modules
import HeroesModule from '@/store/modules/Heroes';
import PlayersModule from '@/store/modules/Players';

export default new Vuex.Store({
  state: {},

  mutations: {},

  actions: {},

  modules: {
    heroesModule: HeroesModule,
    playersModule: PlayersModule,
  },
});
