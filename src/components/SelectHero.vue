<template>
  <div class="select-hero">
    <div class="column">
      <h3>Select your hero</h3>

      <select @change="selectedHero($event)">
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
  },

  methods: {
    async selectedHero(event) {
      await this.$store.dispatch('setHero', { event, id: this.playerId });
    },

    selectedName(event) {
      this.$store.dispatch('setName', { event, id: this.playerId });
    },
  },
};
</script>

<style lang="sass">
.select-hero .hero-card
  width: 256px
  height: calc(256px * 1.61)
</style>
