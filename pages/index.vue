<template>
  <div>
    <img
      width="200"
      src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
      alt="1"
    />
    <div :class="$style.test">Test</div>
    <div :class="$style.test2">Test2</div>
  </div>
</template>

<script>
export default {
  methods: {
    test() {
      // console.log(123)
    },
  },
}
</script>

<style module lang="scss">
.test {
  color: rgba(255, 0, 0, 0.96);
  font-size: 30px;
  font-weight: bold;
  @include breakpoint($mobile__all) {
    color: #369e92;
  }
  @include breakpoint($phone__all) {
    color: #51d720;
  }
  @include breakpoint($desktop__all) {
    color: #69369e;
  }
}

.test2 {
  @include breakpoint($desktop__all) {
    color: #69369e;
  }
}
</style>
