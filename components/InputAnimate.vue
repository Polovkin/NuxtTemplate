<template lang="pug">

  //Text
  label.input-custom__label(
    v-if="type==='text'"
    :class="{'input-custom--error': ($v.text.$error && $v.text.$dirty) ,'input-custom--valid': !$v.text.$error && $v.text.$dirty}")

    span.input-custom__placeholder(:class="{'input-custom__placeholder--animate':placeholderAnimate}")
      | {{ placeholder }}

    input.input-custom.input-custom__animate(
      v-model='$v.text.$model'
      :type='type'
      @click='placeholderAnimate=true'
      @blur='unfocused'
      @input='updateValue($event.target.value)')

    span.input-custom__error-msg.animation-shake(v-if='!$v.text.required && $v.text.$dirty')
      | Field is required

  //Password
  label.input-custom__label(
    v-else-if="type==='password'"
    :class="{'input-custom--error': $v.password.$error && $v.password.$dirty,'input-custom--valid': !$v.password.$error && $v.password.$dirty}")

    span.input-custom__placeholder(:class="{'input-custom__placeholder--animate':placeholderAnimate}")
      | {{ placeholder }}

    input.input-custom.input-custom__animate(
      v-model='$v.password.$model'
      :type="passwordState ? 'text' : type"
      autocomplete='new-password'
      @click='placeholderAnimate=true'
      @blur='unfocused'
      @input='updateValue($event.target.value)')

    span.input-custom__eye(
      v-if='$v.password.$dirty'
      :class="{'input-custom__eye--hidden':passwordState}"
      @click='passwordState=!passwordState')
    span.input-custom__error-msg.animation-shake(v-if='!$v.password.required && $v.password.$dirty')
        | Field is required
    span.input-custom__error-msg.animation-shake(v-if='!$v.password.minLength')
        | Password must have at least {{ $v.password.$params.minLength.min }} letters.
    span.input-custom__error-msg.animation-shake(v-if='!$v.password.maxLength')
        | Password must have no more than {{ $v.password.$params.maxLength.max }} letters.
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'InputCustom',
  mixins: [validationMixin],
  validations: {
    name: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(20)
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(20)
    },
    text: {
      required
    }
  },
  props: {
    placeholder: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'text'
    },
    validate: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      placeholderAnimate: false,
      focus: false,
      name: '',
      email: '',
      text: '',
      password: null,
      passwordState: false
    }
  },
  methods: {
    updateValue (value) {
      if (!this.$v[this.type].$invalid) {
        this.$emit('input', value)
      } else {
        this.$emit('input', null)
      }
    },
    unfocused (e) {
      this.$v.$touch()
      this.placeholderAnimate = !!e.target.value
      this.focus = false
    }
  }
}
</script>
<style scoped
       lang="scss">

$label_top_padding: 15px;
$label_bottom_padding: 20px;
$invalid_color: red;
$valid_color: green;

.input-custom {
  transition: all .4s ease;
  border: {
    top-color: transparent;
    left-color: transparent;
    right-color: transparent;
    bottom-color: black;
  };
  height: $input_height;
  color: $input__font-color;

  &__animate {
    position: relative;
    z-index: z(bg-content);
  }

  &__label {
    position: relative;

    padding-top: $label_top_padding;
    padding-bottom: $label_bottom_padding;
  }

  &__placeholder {

    z-index: z(content);
    font-size: $input__font-size;
    color: $input__placeholder-color;

    top: 18px + $label_bottom_padding;
    position: absolute;
    transition: all .4s ease;
    transform: translateY(0);

    &--animate {
      color: $input__font-color;
      font-size: 10px;
      transform: translate(0%, -20px);
    }
  }

  &__error-msg {
    font-size: 11px;
    position: absolute;
    color: $invalid_color;
    bottom: 0;

  }

  &__eye {
    cursor: pointer;
    z-index: z(content);
    position: absolute;
    top: 18px + $label_bottom_padding;
    right: 1rem;
    display: block;
    @include size(20px);
    background: {
      size: contain;
      image: url("#{$img_path}/icons/eye.svg?data");
    };

    &--hidden {
      background-image: url("#{$img_path}/icons/eye-hide.svg?data") !important;
    }
  }

  &--active {
    border: {
      //bottom: 1px solid green;
    };
  }

  &--valid {
    .input-custom__placeholder {
      color: $valid_color;
    }

    input {
      color: $valid_color;
      border-bottom: 1px solid $valid_color;
    }
  }

  &--error {

    .input-custom__placeholder {
      color: $invalid_color;
    }

    input {
      color: $invalid_color;
      border-bottom: 1px solid $invalid_color;
    }
  }
}

</style>
