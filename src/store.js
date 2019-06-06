import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    heroes: [
      "Spider-Man",
      "Ant-Man (Scott Lang)",
      "Captain America",
      "Wolverine",
      "Thor",
      "Hulk"
    ]
  },
  mutations: {},
  actions: {}
});
