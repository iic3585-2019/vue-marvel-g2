<template>
  <div class="snap">
    <img
      v-for="frame in 3"
      :key="frame"
      :src="require(`@/assets/images/snap/frame-${frame}.jpg`)"
      :class="`snap__frame snap__frame-${frame}`"
      ref="frames"
    />
  </div>
</template>

<script>
export default {
  name: "AppSnap",
  mounted() {
    const timeline = this.$a.timeline();
    const keyframes = [
      {
        translateY: "50%",
        opacity: 0
      },
      {
        translateY: "0%",
        opacity: 1,
        easing: "cubicBezier(0.23, 1, 0.32, 1)",
        duration: 500
      },
      {
        translateY: "-50%",
        opacity: 0,
        easing: "cubicBezier(0.755, 0.05, 0.855, 0.06)",
        duration: 250
      }
    ];

    timeline.add({ targets: this.$refs.frames[0], keyframes });
    timeline.add({ targets: this.$refs.frames[1], keyframes });
    timeline.add({ targets: this.$refs.frames[2], keyframes });
  }
};
</script>

<style lang="sass">
.snap
  position: relative

  display: flex
  align-items: center
  justify-content: center

  width: 100vw
  height: 100vh

.snap__frame
  position: absolute

.snap__frame-1
  z-index: 3

  opacity: 0

.snap__frame-2
  z-index: 2

  opacity: 0

.snap__frame-3
  z-index: 1

  opacity: 0
</style>
