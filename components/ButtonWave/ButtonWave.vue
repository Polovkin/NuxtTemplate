<template>
  <button
    ref="button"
    :class="[$style.button,btnClass]"
    @mousedown="mousedown"
  >
    <span
      ref="wave"
      :class="$style.wave"
    />
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ButtonWave',
  props: {
    text: {
      type: String,
      default: 'wave'
    },
    btnClass: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      button: null,
      wave: null
    }
  },
  mounted () {
    this.button = this.$refs.button
    this.wave = this.$refs.wave
  },
  methods: {
    mousedown (event) {
      const className = this.$style.active
      if (this.button.classList.contains(className)) {
        this.button.classList.remove(className)
      }

      this.wave.style.left = event.clientX - this.button.getBoundingClientRect().left + 'px'
      this.wave.style.top = event.clientY - this.button.getBoundingClientRect().top + 'px'

      // eslint-disable-next-line no-void
      void this.button.offsetWidth
      this.button.classList.add(className)
    }
  }
}
</script>

<style module
       lang="scss">
@import "button-wave.module";

</style>
