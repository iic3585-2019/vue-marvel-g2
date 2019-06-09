import Vue from "vue";
import VueRouter from "vue-router";
import SelectHero from "./components/SelectHero";
import SelectPlayers from "./components/SelectPlayers";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: SelectPlayers
    },
    {
      path: "/heroes",
      name: "heroes",
      component: SelectHero
    }
  ]
});
