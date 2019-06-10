<template>
  <div class="game-view">
    <AppSnapper class="game-view__snapper" @snap-complete="onSnapComplete" />

    <transition-group
      name="fade"
      class="game-view__players d-flex-r d-flex-j-c"
    >
      <AppPlayerCard
        v-for="(player, idx) in players"
        :key="player.id"
        :player="player"
        :class="{ 'margin-l-1': idx > 0 }"
      />
    </transition-group>
  </div>
</template>

<script>
import { mapState } from 'vuex';

// Components
import PlayerCard from '@/components/PlayerCard';
import Snapper from '@/components/Snapper';

export default {
  name: 'AppGameView',

  components: {
    AppPlayerCard: PlayerCard,
    AppSnapper: Snapper,
  },

  computed: {
    ...mapState({
      players: state => state.playersModule.players,
    }),
  },

  methods: {
    onSnapComplete() {
      this.$store.dispatch('destroyHeroes');
    },
  },
};
</script>

<style lang="sass">
.game-view
  display: grid
  grid-template-rows: 1fr auto
  grid-template-columns: 1fr
  align-items: center
  justify-items: center

  width: 100vw
  height: 100vh

.game-view__players
  padding: 16px

  .player-card
    width: 256px
    height: calc(256px * 1.61)

.fade-enter-active, .fade-leave-active
  transition: all 1s

.fade-enter, .fade-leave-to
  opacity: 0
</style>
