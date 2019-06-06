<template>
  <div>
    <h3>Select your hero</h3>
    <select v-on:change="selectedHero($event)">
      <option
        v-for="hero in this.$store.state.heroes"
        v-bind:key="hero.id"
        :value="hero"
        >{{ hero }}</option
      >
    </select>
    <button v-on:click="destroyHeores()">Thanos's Power</button>
    <ImageHero :image="this.hero" />
  </div>
</template>

<script>
import { getSpecificHero } from "./../API/getHero";
import ImageHero from "./ImageHero";
export default {
  name: "SelectHero",
  data() {
    return {
      hero: null
    };
  },
  methods: {
    selectedHero(e) {
      const value = e.target.value;
      getSpecificHero(value).then(image => {
        this.hero = image;
      });
    },
    destroyHeores() {
      const numberDestroy = this.$store.state.heroes.length / 2;
      for (let i = 0; i < numberDestroy; i++) {
        const index = Math.floor(
          Math.random() * this.$store.state.heroes.length
        );
        this.$store.state.heroes.splice(index, 1);
      }
    }
  },
  components: {
    ImageHero
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
