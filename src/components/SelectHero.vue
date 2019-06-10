<template>
  <div class="select-hero">
    <h1
      class="select-hero__name"
      contenteditable="true"
      @input="selectedName($event)"
    >
      {{ player.name || 'Choose your name' }}
    </h1>

    <select
      :value="heroeIdx"
      class="select-hero__hero"
      @change="selectedHero($event)"
    >
      <option value selected="selected" disabled />

      <option v-for="hero in heroes" :key="hero.id" :value="hero">{{
        hero
      }}</option>
    </select>

    <AppHeroCard v-if="player.hero" :hero="player.hero" />
  </div>
</template>

<script>
import { mapState } from 'vuex';

// Components
import HeroCard from '@/components/HeroCard';

export default {
  name: 'SelectHero',

  components: {
    AppHeroCard: HeroCard,
  },

  props: {
    playerId: {
      type: Number,
      required: true,
    },
  },

  computed: {
    ...mapState({
      heroes: state => state.heroesModule.heroes,
      players: state => state.playersModule.players,
    }),

    player() {
      return this.players[this.playerId];
    },

    heroeIdx() {
      return this.$_.findIndex(
        this.heroes,
        hero => hero.name === this.player.hero.name
      );
    },
  },

  methods: {
    async selectedHero({ target: { value } }) {
      await this.$store.dispatch('setHero', { value, id: this.playerId });
    },

    selectedName({ target: { innerText: value } }) {
      this.$store.dispatch('setName', { value, id: this.playerId });
    },
  },
};
</script>

<style lang="sass">
.select-hero
  position: relative

  .hero-card
    width: 256px
    height: calc(256px * 1.61)

    +p-absolute(0, 0, 0, 0, 0)

.select-hero__name
  font-weight: normal
  text-align: center
  color: $c-white

  padding-right: 1rem
  padding-left: 1rem

  background-color: rgba(0, 0, 0, .5)

  +p-relative(1)

.select-hero__hero
  position: relative
  z-index: 99
</style>
