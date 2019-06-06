<template>
  <div id="app">
    <SelectHero/>
  </div>
</template>

<script>
import SelectHero from "./components/SelectHero.vue";

export default {
  name: "app",
  components: {
    SelectHero
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
