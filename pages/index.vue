<template>
  <div>
    <div>
      <div v-if="$device.isDesktop">
        Desktop
      </div>
      <div v-if="$device.isTablet">
        Tablet
      </div>
      <div v-if="$device.isTabletCustom">
        Tablet asdsad
      </div>
      <div v-if="$device.isMobile">
        Mobile
      </div>
    </div>
    <div class="test">
      <div />
      <div />
      <div />
    </div>
  </div>
</template>

<script>

import Navbar from '~/components/Navbar'
import ButtonWave from '~/components/ButtonWave'

export default {

  components: {
    Navbar, ButtonWave
  },
  data () {
    return {
      name: '',
      textarea: ''
    }
  },
  mounted () {
    console.log(this.$device)
  },
  methods: {
    sendForm () {
      const formData = new FormData(this.$refs.form)

      for (const key of formData.keys()) {
        console.log(key)
      }
    }
  }
}
</script>
<style lang="scss">
@import "assets/scss/pages";

</style>
