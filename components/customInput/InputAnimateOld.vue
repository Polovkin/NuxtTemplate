<template>
  <label
    v-if="type==='text'"
    :class="{'input-custom--error': ($v.text.$error && $v.text.$dirty) ,'input-custom--valid': !$v.text.$error && $v.text.$dirty}"
    class="input-custom__label"
  >
    <span
      :class="{'input-custom__placeholder--animate':placeholderAnimate}"
      class="input-custom__placeholder"
    >{{ placeholder }}</span>
    <input
      v-model="$v.text.$model"
      class="input-custom input-custom__animate"
      :type="type"
      @click="placeholderAnimate=true"
      @blur="unfocused"
      @input="updateValue($event.target.value)"
    >
    <span
      v-if="!$v.text.required && $v.text.$dirty"
      class="input-custom__error-msg animation-shake"
    >
      Field is required
    </span>
  </label>
  <label
    v-else-if="type==='name'"
    :class="{'input-custom--error': $v.name.$error && $v.name.$dirty,'input-custom--valid': !$v.name.$error && $v.name.$dirty}"
    class="input-custom__label"
  >
    <span
      :class="{'input-custom__placeholder--animate':placeholderAnimate}"
      class="input-custom__placeholder"
    >{{ placeholder }}</span>

    <input
      v-model="$v.name.$model"
      class="input-custom input-custom__animate"
      :type="type"
      @click="placeholderAnimate=true"
      @blur="unfocused"
      @input="updateValue($event.target.value)"
    >
    <span
      v-if="!$v.name.required && $v.name.$dirty"
      class="input-custom__error-msg animation-shake"
    >
      Field is required
    </span>
    <span
      v-if="!$v.name.minLength"
      class="input-custom__error-msg animation-shake"
    >
      Name must have at least {{ $v.name.$params.minLength.min }} letters.
    </span>
    <span
      v-if="!$v.name.maxLength"
      class="input-custom__error-msg animation-shake"
    >
      Name must have no more than {{ $v.name.$params.maxLength.max }} letters.
    </span>
  </label>
  <label
    v-else-if="type==='password'"
    :class="{'input-custom--error': $v.password.$error && $v.password.$dirty,'input-custom--valid': !$v.password.$error && $v.password.$dirty}"
    class="input-custom__label"
  >
    <span
      :class="{'input-custom__placeholder--animate':placeholderAnimate}"
      class="input-custom__placeholder"
    >{{ placeholder }}</span>

    <input
      v-model="$v.password.$model"
      class="input-custom input-custom__animate"
      :type="passwordState ? 'text' : type"
      autocomplete="new-password"
      @click="placeholderAnimate=true"
      @blur="unfocused"
      @input="updateValue($event.target.value)"
    >
    <span
      v-if="$v.password.$dirty"
      class="input-custom__eye"
      :class="{'input-custom__eye--hidden':passwordState}"
      @click="passwordState=!passwordState"
    />
    <span
      v-if="!$v.password.required && $v.password.$dirty"
      class="input-custom__error-msg animation-shake"
    >
      Field is required
    </span>
    <span
      v-if="!$v.password.minLength"
      class="input-custom__error-msg animation-shake"
    >
      Password must have at least {{ $v.password.$params.minLength.min }} letters.
    </span>
    <span
      v-if="!$v.password.maxLength"
      class="input-custom__error-msg animation-shake"
    >
      Password must have no more than {{ $v.password.$params.maxLength.max }} letters.
    </span>
  </label>
  <label
    v-else-if="type==='email'"
    :class="{ 'input-custom--error': $v.email.$error && $v.email.$dirty ,'input-custom--valid': !$v.email.$error && $v.email.$dirty}"
    class="input-custom__label"
  >
    <span
      :class="{'input-custom__placeholder--animate':placeholderAnimate}"
      class="input-custom__placeholder"
    >{{ placeholder }}</span>

    <input
      v-model.lazy="$v.email.$model"
      class="input-custom input-custom__animate"
      autocomplete="true"
      :type="type"
      @click="placeholderAnimate=true"
      @blur="unfocused"
      @input="updateValue($event.target.value)"
    >
    <span
      v-if="!$v.email.required && $v.email.$dirty"
      class="input-custom__error-msg animation-shake"
    >
      Field is required
    </span>
    <span
      v-if="!$v.email.email"
      class="input-custom__error-msg animation-shake"
    >
      Email is not valid
    </span>
  </label>
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
<style lang="scss">

.input-custom {
    $label_top_padding: 15px;
    $label_bottom_padding: 20px;
    $invalid_color: red;
    $valid_color: green;
    transition: all .4s ease;

    &__animate {
        position: relative;
        z-index: z(content-bg);
    }

    &__label {
        position: relative;

        padding-top: $label_top_padding;
        padding-bottom: $label_bottom_padding;
    }

    &__placeholder {

        z-index: z(content);
        //font-size: $input__font-size;
        //color: $input__placeholder-color;

        top: 18px + $label_bottom_padding;
        position: absolute;
        transition: all .4s ease;
        transform: translateY(0);

        &--animate {
            //color: green;
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
            image: url("/images/icons/eye-hide.svg");
        };

        &--hidden {
            background-image: url("/images/icons/eye.svg") !important;
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
