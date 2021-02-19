<template>
  <section style="color: red">
    <div class="container">
      <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
      <nuxt-link :to="switchLocalePath('fr')">Français</nuxt-link>
      <h1>{{ $t('welcome') }}</h1>
    </div>
  </section>
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
  data() {
    return {
      name: '',
      textarea: ''
    }
  },
  methods: {
    sendForm() {
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

  display: grid;
  grid-template-areas: '#{$areas}';

  background-color: rgba(#008000, .5);

  &1 {
    grid-area: nth($areas, 1);

    background-color: #f00;
  }

  &2 {
    grid-area: nth($areas, 2);

    background-color: #0f6;
  }

  &3 {
    grid-area: nth($areas, 3);

    background-color: #701688;
  }

  &4 {
    grid-area: nth($areas, 4);

    background-color: #000;
  }

  div {
    @include size(50px);
    margin: 10px;

  }
}

</style>
