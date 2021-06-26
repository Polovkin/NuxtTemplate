<template>
  <div>
    <!--    <div :class="$style.testResponsive">
      31
    </div>
    <nav :class="$style.aside">
      <nuxt-link to="/">
        home
      </nuxt-link>
      <nuxt-link to="/about">
        about
      </nuxt-link>
    </nav>-->
    <div>
      <pre>
        {{ $device }}

      </pre>
      <h1 style="color: red; font-weight: bold">Is tablet - {{ $device.isTablet }}</h1>
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
    <!--    <ButtonWave :btn-class="'test2'">
      test
    </ButtonWave>-->
  </div>
</template>

<script>

import Navbar from '~/components/Navbar'
import ButtonWave from '~/components/ButtonWave/ButtonWave'

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
<style module
       lang="scss">
@import "assets/scss/test.module";

</style>
