<template>
  <div class="home-view d-flex-c d-flex-centered">
    <h1 class="home-view__title margin-b-2">Select the number of players</h1>

    <select
      v-model="players"
      class="margin-b-2"
      @change="setEmptyPlayers(players)"
    >
      <option
        v-for="player in numberPlayers"
        :key="player.id"
        :value="player"
        >{{ player }}</option
      >
    </select>

    <div class="d-flex-r d-flex-centered margin-b-2">
      <AppSelectHero
        v-for="idx in players"
        :key="idx"
        :player-id="idx - 1"
        :class="{ 'margin-l-1': idx > 0 }"
      />
    </div>

    <router-link
      to="/snap"
      :disabled="loading"
      tag="button"
      class="home-view__button"
      >Aceptar</router-link
    >
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

// Components
import SelectHero from '@/components/SelectHero';

export default {
  name: 'AppSelectPlayers',

  components: {
    AppSelectHero: SelectHero,
  },

  data() {
    return {
      numberPlayers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      players: 0,
    };
  },

  computed: {
    ...mapState({
      loading: state => state.playersModule.loading,
    }),
  },

  methods: {
    ...mapActions({
      setEmptyPlayers: 'setEmptyPlayers',
    }),
  },
};
</script>

<style lang="sass">
.home-view__title
  font-family: 'Marvel';
  text-transform: uppercase;
  text-align: center;
  color: $c-white

  padding: .5em 1em

  background-color: rgba(0, 0, 0, .5)

.home-view__button
  font-family: 'Marvel';
  font-size: 2rem
  text-transform: uppercase;
  color: $c-white

  padding: .5em 1em

  background-color: $c-primary
  border-radius: 2px
  border: 1px $c-black solid

  transition: background-color .1s
  cursor: pointer

  &:hover
    background-color: lighten($c-primary, 5%)

.home-view .select-hero
  width: 256px
  height: calc(256px * 1.61)
</style>
