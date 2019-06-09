export default {
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

  mutations: {
    "set-heroes"(state, payload) {
      state.heroes = payload.heroes;
    }
  },

  actions: {
    destroyHeroes(ctx) {
      const heroesCopy = [...ctx.state.heroes];
      const numberDestroy = heroesCopy.length / 2;
      for (let i = 0; i < numberDestroy; i++) {
        const index = Math.floor(Math.random() * heroesCopy.length);
        heroesCopy.splice(index, 1);
      }

      ctx.commit("set-heroes", { heroes: heroesCopy });
    }
  }
};
