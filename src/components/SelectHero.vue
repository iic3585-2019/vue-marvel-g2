<template>
  <div>
    <h3> Select your hero </h3>
    <select v-on:change="selectedHero($event)">
      <option value="Spider-Man">Spider Man</option>
      <option value="Ant-Man (Scott Lang)">Ant Man</option>
      <option value="Captain America">Captain America</option>
      <option value="Wolverine">Wolverine</option>
      <option value="Thor">Thor</option>
    </select>
    <ImageHero :image="this.hero" />
  </div>
</template>

<script>
import {getSpecificHero} from './../API/getHero';
import ImageHero from './ImageHero';
export default {
  name: "SelectHero",
  data() {
    return {
      hero: null
    }
  },
  methods: {
    selectedHero(e){
      const value = e.target.value;
      getSpecificHero(value).then(image =>{
        this.hero = image;
      })
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
