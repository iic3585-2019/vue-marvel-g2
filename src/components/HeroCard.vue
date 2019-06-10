<template>
  <div class="hero-card">
    <div
      :style="{ backgroundImage: `url(${hero.image})` }"
      class="hero-card__image"
    />
  </div>
</template>

<script>
export default {
  name: 'AppHeroCard',

  props: {
    hero: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="sass">
.hero-card
  position: relative

  border-radius: 4px
  border: 1px $c-black solid

  overflow: hidden

.hero-card__image
  background-color: $c-gray-1

  animation: blink 1.5s infinite $easeInOutQuad

  +background-image
  +p-absolute(0, 0, 0, 0, 0)

@keyframes blink
  0%
    background-color: lighten($c-gray-1, 10%)

  75%
    background-color: lighten($c-gray-1, 0%)

  100%
    background-color: lighten($c-gray-1, 10%)
</style>
