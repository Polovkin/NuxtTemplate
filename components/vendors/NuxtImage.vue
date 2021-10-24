<template>
  <nuxt-img v-if="type === NUXT_IMAGE_TYPE_IMG" width="200" :src="url" />
  <nuxt-picture v-else width="200" :src="url" />
</template>

<script>
import { NUXT_IMAGE_TYPE_IMG, NUXT_IMAGE_TYPE_PICTURE } from '@/helpers/types'

export default {
  name: 'NuxtImage',
  props: {
    type: {
      type: String,
      default: NUXT_IMAGE_TYPE_IMG,
    },
    url: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      NUXT_IMAGE_TYPE_IMG,
      NUXT_IMAGE_TYPE_PICTURE,
    }
  },
}
</script>

<style scoped></style>
