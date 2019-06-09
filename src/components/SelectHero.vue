<template>
  <div>
    <h3>Select your hero</h3>
    <select @change="selectedHero($event)">
      <option v-for="hero in heroes" :key="hero.id" :value="hero">{{
        hero
      }}</option>
    </select>
    <button @click="kill">Thanos's Power</button>
    <AppImageHero :image="hero" />
  </div>
</template>

<script>
import { getSpecificHero } from './../API/getHero';
import ImageHero from './ImageHero';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'SelectHero',
  data() {
    return {
      hero: null,
    };
  },
  computed: {
    ...mapState({
      heroes: state => state.heroesModule.heroes,
    }),
  },
  methods: {
    ...mapActions({
      kill: 'destroyHeroes',
    }),
    selectedHero(e) {
      const value = e.target.value;
      getSpecificHero(value).then(image => {
        this.hero = image;
      });
    },
  },
  components: {
    AppImageHero: ImageHero,
  },
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
