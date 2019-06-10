<template>
  <div class="player-card elevation-3">
    <AppHeroCard :hero="player.hero" />

    <h1 class="player-card__title">
      {{ player.name }} ({{ player.hero.name }})
    </h1>
  </div>
</template>

<script>
// Components
import HeroCard from '@/components/HeroCard';

export default {
  name: 'AppPlayerCard',

  components: {
    AppHeroCard: HeroCard,
  },

  props: {
    player: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="sass">
.player-card
  position: relative

  .hero-card
    +p-absolute(0, 0, 0, 0, 0)

.player-card__title
  font-weight: normal
  text-align: center
  color: $c-white

  padding-right: 1rem
  padding-left: 1rem

  background-color: rgba(0, 0, 0, .5)

  +p-relative(1)
</style>
