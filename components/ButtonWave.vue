<template>
  <button
    ref="button"
    class="material-btn"
    :class="btnClass"
    @mousedown="mousedown"
  >
    <span ref="wave" class="wave" />
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
      const className = 'material-btn--active'
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

<style scoped
       lang="scss">

.material-btn {

    position: relative;

    overflow: hidden;

    font-weight: 500;

    cursor: pointer;

    &--active .wave {
        animation: wave-animation .8s;
    }
}

.wave {
    position: absolute;
    top: 0;
    left: 0;

    width: 15px;
    height: 15px;

    border-radius: 100%;

    background: rgba($color__dark, .5);

    transform: scale(0);

}

@keyframes wave-animation {

    from {
        transform: scale(0);
        opacity: 1;
    }

    to {
        transform: scale(10);
        opacity: 0;
    }
}

@keyframes slide-animation {

    0% {
        transform: translateX(0%);
        opacity: 1;
    }

    50% {
        transform: translateX(150%);
        opacity: 0;
    }

    51% {
        transform: translate(-100%);
    }

    100% {
        transform: translate(0%);
        opacity: 1;
    }
}

</style>
