<template>
  <div id="app">
    <div class="app__background-image" />

    <AppGameView class="app__router-view" />
  </div>
</template>

<script>
import GameView from '@/views/Game.vue';

export default {
  name: 'App',
  components: {
    AppGameView: GameView,
  },
};
</script>

<style lang="sass">
#app
  width: 100vw
  height: 100vh

  background-color: #ED1D24

.app__background-image
  background-image: url(~@/assets/images/background.jpg)

  opacity: .25

  +background-image
  +p-fixed(0, 0, 0, 0)

.app__router-view
  position: relative
  z-index: 1
</style>
