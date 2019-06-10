<template>
  <div class="snapper">
    <div v-show="isSnapping" class="snapper__frames">
      <img
        v-for="frame in 3"
        :key="frame"
        ref="frames"
        :src="require(`@/assets/images/snap/frame-${frame}.jpg`)"
        :class="`snapper__frame snapper__frame-${frame}`"
      />
    </div>

    <button type="button" class="snapper__button elevation-3" @click="play">
      Snap
    </button>
  </div>
</template>

<script>
export default {
  name: 'AppSnapper',

  data() {
    return {
      isSnapping: false,
    };
  },

  methods: {
    play() {
      const timeline = this.$a.timeline({
        begin: () => {
          this.isSnapping = true;

          this.$emit('snap-begin');
        },
        complete: () => {
          this.isSnapping = false;

          this.$emit('snap-complete');
        },
      });
      const keyframes = [
        {
          translateY: '50%',
          opacity: 0,
        },
        {
          translateY: '0%',
          opacity: 1,
          easing: 'cubicBezier(0.23, 1, 0.32, 1)',
          duration: 500,
        },
        {
          translateY: '-50%',
          opacity: 0,
          easing: 'cubicBezier(0.755, 0.05, 0.855, 0.06)',
          duration: 250,
        },
      ];

      timeline.add({ targets: this.$refs.frames[0], keyframes });
      timeline.add({ targets: this.$refs.frames[1], keyframes });
      timeline.add({ targets: this.$refs.frames[2], keyframes });
    },
  },
};
</script>

<style lang="sass">
$z-index: 2

.snapper__frames
  display: flex
  align-items: center
  justify-content: center

  background-color: rgba(0, 0, 0, 0.9)

  +p-fixed($z-index, 0, 0, 0, 0)

.snapper__frame
  position: absolute

.snapper__frame-1
  z-index: #{$z-index + 3}

  opacity: 0

.snapper__frame-2
  z-index: #{$z-index + 2}

  opacity: 0

.snapper__frame-3
  z-index: #{$z-index + 1}

  opacity: 0

.snapper__button
  font-family: 'Marvel';
  font-size: 4rem
  text-transform: uppercase;
  color: $c-white

  padding: 1rem 3rem

  background-color: $c-primary
  border-radius: 2px
  border: 1px $c-black solid

  transition: background-color .1s
  cursor: pointer

  &:hover
    background-color: lighten($c-primary, 5%)
</style>
