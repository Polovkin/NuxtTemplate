<template>
  <div>
    <NuxtImage
      :type="NUXT_IMAGE_TYPE_PICTURE"
      url="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
    />
    <div :class="$style.test">Test</div>
    <div :class="$style.test2">Test2</div>
  </div>
</template>

<script>
import NuxtImage from '@/components/vendors/NuxtImage'
import { NUXT_IMAGE_TYPE_PICTURE } from '@/helpers/types'

export default {
  components: { NuxtImage },
  data() {
    return {
      NUXT_IMAGE_TYPE_PICTURE,
    }
  },
  methods: {
    url: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
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
