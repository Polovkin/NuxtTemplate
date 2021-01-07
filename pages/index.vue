<template lang="pug">
  section
    Navbar
    InputAnimate
    TextAreaAnimate
    ButtonWave
</template>

<script>

import Navbar from '~/components/Navbar'
import ButtonWave from '~/components/ButtonWave'
import InputAnimate from '~/components/customInput/InputAnimate'
import TextAreaAnimate from '~/components/customInput/TextAreaAnimate'

export default {
  components: {
    Navbar, TextAreaAnimate, InputAnimate, ButtonWave
  }
}
</script>
<style lang="scss">
h1 {
  color: $color__primary;
}
</style>
