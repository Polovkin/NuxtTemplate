<template>
  <div class="container">
    <h1>Page</h1>

  </div>
</template>

<script>
export default {
  mounted() {

  }
}
</script>

<style lang="scss">

h2 {
  color: red;
}
h1 {
  color: $color__secondary;
  @include breakpoint($phone__all) {
    color: red;
  }

  @include breakpoint($tablet__all) {
    color: green;
  }

  @include breakpoint($desktop__laptop) {
    color: purple;
  }
}
</style>
