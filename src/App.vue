<template>
  <div id="app">
    <AppSnap />
  </div>
</template>

<script>
import Snap from "@/components/Snap.vue";

export default {
  name: "app",
  components: { AppSnap: Snap }
};
</script>

<style lang="sass">
#app
  width: 100vw
  height: 100vh
</style>
