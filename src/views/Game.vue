<template>
  <div class="game-view">
    <AppSnapper
      class="game-view__snapper"
      @snap-begin="onSnapBegin"
      @snap-complete="onSnapComplete"
    />

    <div class="game-view__players d-flex-r d-flex-j-c">
      <AppPlayer
        v-for="(player, idx) in players"
        :key="player.id"
        :player="player"
        :class="{ 'margin-l-1': idx > 0 }"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

// Components
import Player from '@/components/Player';
import Snapper from '@/components/Snapper';

export default {
  name: 'AppGameView',

  components: {
    AppPlayer: Player,
    AppSnapper: Snapper,
  },

  computed: {
    ...mapState({
      players: () => [
        {
          name: 'Benjamin',
          hero: {
            name: 'Wolverine',
            image:
              'https://dam.smashmexico.com.mx/wp-content/uploads/2018/11/wolverinebio_portada.gif',
          },
        },
        {
          name: 'Benjamin',
          hero: {
            name: 'Wolverine',
            image:
              'https://dam.smashmexico.com.mx/wp-content/uploads/2018/11/wolverinebio_portada.gif',
          },
        },
      ],
    }),
  },

  methods: {
    onSnapBegin() {
      console.log('Wow');
    },

    onSnapComplete() {
      console.log('Wow');
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

  .player
    width: 256px
    height: calc(256px * 1.61)
</style>
