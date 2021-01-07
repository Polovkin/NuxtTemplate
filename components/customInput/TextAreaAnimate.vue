<template>
  <label
    :class="{'input-custom--error': ($v.text.$error && $v.text.$dirty) ,'input-custom--valid': !$v.text.$error && $v.text.$dirty}"
    class="input-custom__label textarea-custom__label"
  >
    <span
      :class="{'input-custom__placeholder--animate':placeholderAnimate}"
      class="input-custom__placeholder"
    >{{ placeholder }}</span>

    <textarea
      v-model="$v.text.$model"
      class="textarea-custom input-custom__animate"
      :type="type"
      @click="placeholderAnimate=true"
      @blur="unfocused"
      @input="updateValue($event.target.value)"
    />
    <span
      v-if="!$v.text.required && $v.text.$dirty"
      class="input-custom__error-msg"
    >
      Field is required
    </span>
  </label>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'TextAreaAnimate',
  mixins: [validationMixin],
  validations: {
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
      text: ''
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

<style lang="scss">
.textarea-custom {
    height: auto;

    &__label {
        .input-custom__placeholder--animate {
            transform: translate(0%, -40px);
        }
    }

}
</style>
