<template>
  <div>
    <div>
      <pre>
        {{ $device }}

      </pre>
      <h1 style="color: red; font-weight: bold">
        Is tablet - {{ $device.isTablet }}
      </h1>
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
    <ButtonWave/>
  </div>
</template>

<script>



import ButtonWave from "~/components/ButtonWave/ButtonWave";
export default {

  components: {
    ButtonWave

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
