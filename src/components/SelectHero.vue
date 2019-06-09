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
      <AppImageHero :image="hero" />
    </div>
    <div class="column">
      <h3>Select your name</h3>
      <input />
    </div>
  </div>
</template>

<script>
import { getSpecificHero } from "./../API/getHero";
import ImageHero from "./ImageHero";
import { mapState } from "vuex";

export default {
  name: "SelectHero",
  data() {
    return {
      hero: null
    };
  },
  computed: {
    ...mapState({
      heroes: state => state.heroesModule.heroes
    })
  },
  methods: {
    selectedHero(e) {
      const value = e.target.value;
      getSpecificHero(value).then(image => {
        this.hero = image;
      });
    }
  },
  components: {
    AppImageHero: ImageHero
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
