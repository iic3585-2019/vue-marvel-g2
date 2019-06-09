import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// Store modules
import HeroesModule from "@/store/modules/Heroes";

export default new Vuex.Store({
  state: {},

  mutations: {},

  actions: {},

  modules: {
    heroesModule: HeroesModule
  }
});
