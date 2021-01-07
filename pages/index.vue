<template lang="pug">
  section
    Navbar
    InputAnimate(:placeholder="'simple text'")
    InputAnimate(type-password)
    InputAnimate(type-email)
    ButtonWave text
</template>

<script>

import Navbar from '~/components/Navbar'
import ButtonWave from '~/components/ButtonWave'
import InputAnimate from '~/components/InputAnimate'

export default {
  components: {
    Navbar, InputAnimate, ButtonWave
  }
}
</script>
<style lang="scss">
h1 {
  color: $color__primary;
}
</style>
