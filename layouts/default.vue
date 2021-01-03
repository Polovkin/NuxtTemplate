<template>
  <div>
    <Navbar/>
    <div class="container">
      <nuxt/>
    </div>
  </div>

</template>

<script>
import Navbar from "~/components/Navbar";

export default {
  components: {Navbar},
  data() {
    return {}
  }
}
</script>
<style lang="scss">
@import "~@/assets/scss/_app.scss";
</style>
