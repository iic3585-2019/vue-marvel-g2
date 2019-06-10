export default {
  state: {
    heroes: [
      'Spider-Man',
      'Ant-Man (Scott Lang)',
      'Captain America',
      'Wolverine',
      'Thor',
      'Hulk',
    ],
  },

  mutations: {
    'set-heroes'(state, payload) {
      state.heroes = payload.heroes;
    },
  },

  actions: {},
};
