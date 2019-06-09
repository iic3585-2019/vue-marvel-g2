<template>
  <div class="player elevation-3">
    <div
      :style="{ backgroundImage: `url(${player.hero.image})` }"
      class="player__hero-image"
    />

    <h1 class="player__title">{{ player.name }} ({{ player.hero.name }})</h1>
  </div>
</template>

<script>
export default {
  name: 'AppPlayer',

  props: {
    player: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="sass">
.player
  position: relative

  border-radius: 4px

  overflow: hidden

.player__title
  text-align: center
  color: $c-white

  background-color: rgba(0, 0, 0, .5)

  +p-relative(1)

.player__hero-image
  +background-image
  +p-absolute(0, 0, 0, 0, 0)
</style>
