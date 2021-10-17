<template>
  <button
    ref="button"
    :class="[$style.button, btnClass]"
    @mousedown="mousedown"
  >
    <span ref="wave" :class="$style.wave" />
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ButtonWave',
  props: {
    text: {
      type: String,
      default: 'wave',
    },
    btnClass: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      button: null,
      wave: null,
    }
  },
  mounted() {
    this.button = this.$refs.button
    this.wave = this.$refs.wave
  },
  methods: {
    mousedown(event) {
      const className = this.$style.active
      if (this.button.classList.contains(className)) {
        this.button.classList.remove(className)
      }

      this.wave.style.left =
        event.clientX - this.button.getBoundingClientRect().left + 'px'
      this.wave.style.top =
        event.clientY - this.button.getBoundingClientRect().top + 'px'

      // eslint-disable-next-line no-void
      void this.button.offsetWidth
      this.button.classList.add(className)
    },
  },
}
</script>

<style module lang="scss">
.button {
  position: relative;

  overflow: hidden;

  padding: 10px 20px;

  border-radius: 5px;

  background-color: $color__primary;

  font-weight: 500;

  cursor: pointer;
}

.wave {
  position: absolute;
  top: 0;
  left: 0;

  width: 15px;
  height: 15px;

  border-radius: 100%;

  background: rgba($color__dark, 0.5);

  transform: scale(0);
}

.active {
  .wave {
    animation: wave-animation 0.8s;
  }
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
