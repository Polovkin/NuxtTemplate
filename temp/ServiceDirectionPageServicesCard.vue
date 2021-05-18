<template>
  <div
    ref="card"
    class="card-wrap"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div class="card" :style="cardStyle">
      <div class="card-info">
        <div :style="textStyle" class="description__item">
          <h3 class="heading__item">
            {{ title }}
          </h3>
          <p class="description__item">
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceDirectionPageServicesCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    width: 0,
    height: 0,
    mouseX: 0,
    mouseY: 0,
    mouseLeaveDelay: null,
    windowWidth: 0,
    isFirefox: false
  }),
  computed: {
    cardStyle() {
      if (this.isFirefox || this.windowWidth <= 640) {
        return
      }
      const rX = (this.mouseX / this.width) * 40
      const rY = (this.mouseY / this.height) * -20
      return {
        '-moz-transform': `rotateY(${rX}deg) rotateX(${rY}deg)`,
        '-ms-transform': `rotateY(${rX}deg) rotateX(${rY}deg)`,
        '-o-transform': `rotateY(${rX}deg) rotateX(${rY}deg)`,
        '-webkit-transform': `rotateY(${rX}deg) rotateX(${rY}deg)`,
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
      }
    },
    textStyle() {
      if (this.isFirefox || this.windowWidth <= 640) {
        return
      }
      const rX = (this.mouseX / this.width) * 4
      const rY = (this.mouseY / this.height) * -2
      return {
        '-moz-transform': `rotateY(${rX}deg) rotateX(${rY}deg) translateZ(500px)`,
        '-ms-transform': `rotateY(${rX}deg) rotateX(${rY}deg) translateZ(500px)`,
        '-o-transform': `rotateY(${rX}deg) rotateX(${rY}deg) translateZ(500px)`,
        '-webkit-transform': `rotateY(${rX}deg) rotateX(${rY}deg) translateZ(500px)`,
        transform: `rotateY(${rX}deg) rotateX(${rY}deg) translateZ(500px)`,
        transition: '150ms'
      }
    }
  },
  mounted() {
    const userAgent = window.navigator.userAgent
    if (userAgent.includes('Firefox')) {
      this.isFirefox = true
    }
    this.width = this.$refs.card.offsetWidth
    this.height = this.$refs.card.offsetHeight
    this.windowWidth = window.innerWidth
  },
  methods: {
    handleMouseMove(e) {
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2
    },
    handleMouseLeave() {
      this.mouseX = 0
      this.mouseY = 0
    }
  }
}
</script>
