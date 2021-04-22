<template>
  <div>
    <div v-if="$device.isDesktop">
      Desktop
    </div>
    <div v-else-if="$device.isTablet">
      Tablet
    </div>
    <div v-else>
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
