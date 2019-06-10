<template>
  <div class="home-view">
    <h3>Select the number of players</h3>

    <select v-model="players" @change="addPlayer(players)">
      <option
        v-for="player in numberPlayers"
        :key="player.id"
        :value="player"
        >{{ player }}</option
      >
    </select>

    <AppSelectHero
      v-for="index in players"
      :key="index"
      :player-id="index - 1"
    />

    <router-link to="/snap" tag="button" :disabled="loading"
      >heroes</router-link
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
      addPlayer: 'addPlayer',
    }),
  },
};
</script>
