<template lang="pug">
  section
    Navbar
    h1 asd
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

   @include breakpoint ($tablet__all) {
       color: purple;
    }
   @include breakpoint ($tablet__landscape) {
       color: yellow;
    }
   @include breakpoint ($tablet__portrait) {
       color: green;
    }
}
</style>
