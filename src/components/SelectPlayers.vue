<template>
  <div>
    <h3>Select the number of players</h3>
    <select v-model="players" @change="addPlayer(players)">
      <option
        v-for="player in numberPlayers"
        :key="player.id"
        :value="player"
        >{{ player }}</option
      >
    </select>
    <AppSelectHero v-for="index in players" :key="index" playerId="1" />
    <router-link to="/heroes" tag="button">heroes</router-link>
  </div>
</template>

<script>
import SelectHero from "./SelectHero";
import { mapActions } from "vuex";

export default {
  name: "SelectPlayers",
  data() {
    return {
      numberPlayers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      players: 0
    };
  },
  methods: {
    ...mapActions({
      addPlayer: "addPlayer"
    })
  },
  components: {
    AppSelectHero: SelectHero
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
select {
  display: fixed;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
