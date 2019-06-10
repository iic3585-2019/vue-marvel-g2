import { getSpecificHero } from '@/API/getHero';

export default {
  state: {
    players: [],

    loading: false,
  },

  mutations: {
    'set-players'(state, payload) {
      state.players = payload.players;
    },

    'set-loading'(state, loading) {
      state.loading = loading;
    },
  },

  actions: {
    setEmptyPlayers(ctx, iterations) {
      const newPlayers = [];
      for (let i = 0; i < iterations; i++) {
        newPlayers.push({
          id: i,
          hero: {
            name: '',
            image: '',
          },
        });
      }

      ctx.commit('set-players', { players: newPlayers });
    },

    async setHero(ctx, payload) {
      ctx.commit('set-loading', true);

      const playersCopy = [...ctx.state.players];
      const { value, id } = payload;
      playersCopy[id].hero = { name: value, image: null };
      const image = await getSpecificHero(value);
      playersCopy[id].hero.image = image;

      ctx.commit('set-players', { players: playersCopy });
      ctx.commit('set-loading', false);
    },

    setName(ctx, payload) {
      const playersCopy = [...ctx.state.players];
      const { value, id } = payload;
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
