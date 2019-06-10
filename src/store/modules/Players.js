import { getSpecificHero } from "./../../API/getHero";
export default {
  state: {
    players: []
  },

  mutations: {
    "set-players"(state, payload) {
      state.players = payload.players;
      console.log(state.players);
    }
  },

  actions: {
    addPlayer(ctx, iterations) {
      const playersCopy = [...ctx.state.players];
      for (let i = 0; i < iterations; i++) {
        playersCopy.push({ id: i, hero: null });
      }
      ctx.commit("set-players", { players: playersCopy });
    },
    setHero(ctx, payload) {
      const playersCopy = [...ctx.state.players];
      const { event, id } = payload;
      const value = event.target.value;
      console.log(value);
      console.log(id);
      console.log(playersCopy[id]);
      playersCopy[id].hero = { name: value, image: null };
      console.log("sadasdasd");
      getSpecificHero(value).then(image => {
        console.log("en la promesa");
        playersCopy[id].hero.image = image;
        console.log("la imagen");
        ctx.commit("set-players", { players: playersCopy });
      });
    },
    setName(ctx, payload) {
      const playersCopy = [...ctx.state.players];
      const { event, id } = payload;
      const value = event.target.value;
      playersCopy[id].name = value;
      ctx.commit("set-players", { players: playersCopy });
    }
  }
};
