<template>
  <div class="select-hero">
    <div class="column">
      <h3>Select your hero</h3>

      <select :value="heroeIdx" @change="selectedHero($event)">
        <option value selected="selected" disabled />

        <option v-for="hero in heroes" :key="hero.id" :value="hero">
          {{ hero }}
        </option>
      </select>

      <AppHeroCard v-if="player.hero" :hero="player.hero" />
    </div>

    <div class="column">
      <h3>Select your name</h3>

      <input @change="selectedName($event)" />
    </div>
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

    selectedName({ target: { value } }) {
      this.$store.dispatch('setName', { value, id: this.playerId });
    },
  },
};
</script>

<style lang="sass">
.select-hero .hero-card
  width: 256px
  height: calc(256px * 1.61)
</style>
