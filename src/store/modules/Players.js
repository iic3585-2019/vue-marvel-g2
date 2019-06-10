import { getSpecificHero } from './../../API/getHero';
export default {
  state: {
    players: [],
    loading: false,
  },

  mutations: {
    'set-players'(state, payload) {
      state.players = payload.players;
      console.log(state.players);
    },
    'set-loading'(state, loading) {
      state.loading = loading;
    },
  },

  actions: {
    addPlayer(ctx, iterations) {
      const playersCopy = [...ctx.state.players];
      for (let i = 0; i < iterations; i++) {
        playersCopy.push({ id: i, hero: null });
      }
      ctx.commit('set-players', { players: playersCopy });
    },

    async setHero(ctx, payload) {
      ctx.commit('set-loading', true);
      const playersCopy = [...ctx.state.players];
      const { event, id } = payload;
      const value = event.target.value;
      console.log(id);
      console.log(playersCopy);
      playersCopy[id].hero = { name: value, image: null };
      const image = await getSpecificHero(value);
      playersCopy[id].hero.image = image;
      ctx.commit('set-players', { players: playersCopy });
      ctx.commit('set-loading', false);
    },

    setName(ctx, payload) {
      const playersCopy = [...ctx.state.players];
      const { event, id } = payload;
      const value = event.target.value;
      playersCopy[id].name = value;
      ctx.commit('set-players', { players: playersCopy });
    },

    destroyHeroes(ctx) {
      const playersCopy = [...ctx.state.players];
      const numberDestroy = playersCopy.length / 2;
      for (let i = 0; i < numberDestroy; i++) {
        const index = Math.floor(Math.random() * playersCopy.length);
        playersCopy.splice(index, 1);
      }

      ctx.commit('set-players', { players: playersCopy });
    },
  },
};
