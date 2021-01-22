<template lang="pug">
  section
    Navbar
    h1 asd
    form#form(@submit.prevent="sendForm" ref="form")
      p {{name}} sad
      p {{textarea}} asd
      Input(
        :name="'name'",
        :placeholder="'Enter name'"
        :form-id="'form'"
        v-model="name"
        is-required
      )
      Input(
        :name="'lastName'",
        :placeholder="'Enter last name'"
        :form-id="'form'"
      )
      Input(
        :name="'email'",
        :placeholder="'Enter email'"
        :form-id="'form'"
        is-email is-required )
      Input(
        :name="'emailRepeat'",
        :placeholder="'Repeat email'"
        :form-id="'form'"
        is-email is-required )
      Input(
        :name="'message'",
        :placeholder="'Enter message'"
        :form-id="'form'"
        v-model="textarea"
        is-textarea)
      Input(
        :name="'password'",
        :placeholder="'Enter password'"
        :form-id="'form'"
        is-password is-required)
      //Input(
      //  :name="'passwordRepeat'",
      //  :placeholder="'Repeat password'"
      //  :form-id="'form'"
      //  is-password is-required)

      button(type="submit") submit
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
  data () {
    return {
      name: '',
      textarea: ''
    }
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
<style lang="scss">
button {
  color: $color__primary;
}

label {
  margin-bottom: 30px;
}

#form {
  color: red;
}

h1 {

  color: $color__primary;

  @include breakpoint($tablet__all) {
    color: purple;
  }
  @include breakpoint($tablet__landscape) {
    color: yellow;
  }
  @include breakpoint($tablet__portrait) {
    color: green;
  }
}
</style>
