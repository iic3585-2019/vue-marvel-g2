<template>
  <div>
    <div class="column">
      <h3>Select your hero</h3>
      <select @change="selectedHero($event)">
        <option value="" selected="selected" disabled></option>
        <option v-for="hero in heroes" :key="hero.id" :value="hero">{{
          hero
        }}</option>
      </select>
      <!-- <AppImageHero :image="$store.state.playersModule.players[this.playerId].hero" /> -->
    </div>
    <div class="column">
      <h3>Select your name</h3>
      <input @change="selectedName($event)" />
    </div>
  </div>
</template>

<script>
//import ImageHero from "./ImageHero";
import { mapState } from "vuex";

export default {
  name: 'SelectHero',
  data() {
    return {
      name: null,
      hero: { name: null, image: null }
    };
  },
  props: {
    playerId: String
  },
  computed: {
    ...mapState({
      heroes: state => state.heroesModule.heroes,
      players: state => state.playersModule.players
    })
  },
  methods: {
    selectedHero(event) {
      this.$store.dispatch("setHero", { event, id: Number(this.playerId) });
    },
    selectedName(event) {
      this.$store.dispatch("setName", { event, id: Number(this.playerId) });
    }
  },
  components: {
    //AppImageHero: ImageHero
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.column {
  display: inline-block;
}
h3 {
  margin: 40px;
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
