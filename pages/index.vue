<template>
  <div>
    <div v-click-outside="test">
      <ButtonWave />
    </div>
    <div v-in-viewport.once>1`23</div>
  </div>
</template>

<script>
import ButtonWave from '~/components/ButtonWave/ButtonWave'

export default {
  components: { ButtonWave },
  methods: {
    test() {
      console.log(123)
    },
  },
}
</script>
