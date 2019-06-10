<template>
  <div id="app">
    <div class="app__background-image" />
    <router-view class="app__router-view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="sass">
#app
  width: 100vw
  height: 100vh

  background-color: $c-primary

.app__background-image
  background-image: url(~@/assets/images/background.jpg)

  opacity: .25

  +background-image
  +p-fixed(0, 0, 0, 0)

.app__router-view
  position: relative
  z-index: 1
</style>
