<template lang="pug">
  section
    Navbar
    h1 asd
    form#form(@submit.prevent="sendForm" ref="form")
      p {{name}} sad
      p {{textarea}} asd
      .block
        .block1
        .block2
        .block3
        .block4
        //Input(
        //  :name="'name'",
        //  :placeholder="'Enter name'"
        //  :form-id="'form'"
        //  v-model="name"
        //  is-required
        //)
        //Input(
        //  :name="'lastName'",
        //  :placeholder="'Enter last name'"
        //  :form-id="'form'"
        //)
        //Input(
        //  :name="'email'",
        //  :placeholder="'Enter email'"
        //  :form-id="'form'"
        //  is-email is-required )
        //Input(
        //  :name="'emailRepeat'",
        //  :placeholder="'Repeat email'"
        //  :form-id="'form'"
        //  is-email is-required )
        //Input(
        //  :name="'message'",
        //  :placeholder="'Enter message'"
        //  :form-id="'form'"
        //  v-model="textarea"
        //  is-textarea)
        //Input(
        //  :name="'password'",
        //  :placeholder="'Enter password'"
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
    grid-area: nth($areas,1);

    background-color: #f00;
  }

  &2 {
    grid-area: nth($areas,2);

    background-color: #0f6;
  }

  &3 {
    grid-area: nth($areas,3);

    background-color: #701688;
  }

  &4{
    grid-area: nth($areas,4);

    background-color: #000;
  }

  div {
    @include size(50px);
    margin: 10px;

  }
}


</style>
