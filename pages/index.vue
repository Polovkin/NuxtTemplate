<template>
  <div>
    <div v-if="$device.isDesktop">
      Desktop
    </div>
    <div v-if="$device.isTablet">
      Tablet
    </div>
    <div v-if="$device.isCustom">
      Tablet asdsad
    </div>
    <div v-if="$device.isMobile">
      Mobile
    </div>
  </div>
</template>

<script>

import Input from '~/components/customInput/Input'
import Navbar from '~/components/Navbar'
import ButtonWave from '~/components/ButtonWave'
import InputAnimate from '~/components/InputAnimate'

export default {

  components: {
    Navbar, InputAnimate, ButtonWave, Input
  },
  data () {
    return {
      name: '',
      textarea: ''
    }
  },
  mounted() {
    console.log(this.$device);
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
$areas: block1 block2 block3 block4;

.block {
 @include breakpoint ($desktop__all) {

  }
}

</style>
