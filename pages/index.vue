<template>
  <div>
    <div :class="$style.testResponsive">
      123
    </div>
    <nav :class="$style.aside">
      <nuxt-link to="/">
        home
      </nuxt-link>
      <nuxt-link to="/about">
        about
      </nuxt-link>
    </nav>
    <div>
      <div v-if="$device.isDesktop">
        <h1>Desktop</h1>
      </div>
      <div v-if="$device.isTablet">
        <h1>Tablet</h1>
      </div>
      <div v-if="$device.isCustom">
        <h1> Tablet custom</h1>
      </div>
      <div v-if="$device.isMobile">
        <h1>Mobile</h1>
      </div>
    </div>
    <ButtonWave :btn-class="'test2'">
      test
    </ButtonWave>
  </div>
</template>

<script>

import Navbar from '~/components/Navbar'
import ButtonWave from '~/components/ButtonWave/ButtonWave'

export default {

  components: {
    Navbar, ButtonWave
  },
  data () {
    return {
      name: '',
      textarea: ''
    }
  },
  mounted () {
    //console.log(this.$device)
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
<style module
       lang="scss">
.test {
  color: green;
}

.aside {
  margin: 20px;
  border: 1px solid black;
}

.testResponsive {
  margin: 20px;
  padding: 20px;

  border: 3px solid black;

  background-color: green;

  @include breakpoint($portrait__all) {
    background-color: black;
  }
  @include breakpoint($tablet__all) {
    background-color: blue;
  }
  @include breakpoint($phone__all) {
    background-color: purple;
  }
  @include breakpoint($phone__landscape) {
    background-color: red;
  }
}

@mixin active {

  .slideTitle {
    color: $color__primary;
  }

  .bg {
    background: $color__primary;
  }

  .slideDescription,
  .slideLink {
    opacity: 1;
  }
}

.links {
  flex-direction: column;

  display: flex;

  padding-top: 200px;

  a {
    margin-bottom: 10px;
  }
}

.main {
  background: linear-gradient(90deg, $color__dark, #191919);
  background-size: cover;

  color: $color__light;

}

.container {

  position: relative;
  z-index: z(content);
}

.wrap {

  background: {

    position: 113% -6vw;
    repeat: no-repeat;
    size: 45%;
  };
}

.heading {

  padding-top: 202px;
}

.pic {
  @include size(280px);

  display: none;

  margin: auto;
  padding: 20px;

  background-image: url("data:image/svg+xml,%3Csvg width='41' height='40' viewBox='0 0 41 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.0711 10.5542C14.8119 10.5542 10.5352 14.8294 10.5352 20.0868C10.5352 25.3441 14.8119 29.6194 20.0711 29.6194C25.3303 29.6194 29.607 25.3441 29.607 20.0868C29.607 14.8294 25.3881 10.5542 20.0711 10.5542ZM25.1569 16.6782C24.6367 16.6782 24.001 15.4649 23.0763 14.8872C22.0938 14.2517 20.9958 14.1361 20.9958 13.5584C20.9958 12.9807 22.1516 12.5185 23.2497 12.5185C24.4056 12.5185 25.6192 13.7317 25.966 14.7716C26.3705 15.8116 25.9082 16.6782 25.1569 16.6782Z' fill='%23F05722'/%3E%3Cpath d='M20.0673 33.837C12.4964 33.837 6.3125 27.6553 6.3125 20.087C6.3125 12.5187 12.4964 6.33691 20.0673 6.33691C27.6382 6.33691 33.8221 12.5187 33.8221 20.087C33.8221 27.6553 27.696 33.837 20.0673 33.837ZM20.0673 7.95457C13.3633 7.95457 7.93071 13.3853 7.93071 20.087C7.93071 26.7887 13.3633 32.2193 20.0673 32.2193C26.7713 32.2193 32.2039 26.7887 32.2039 20.087C32.2617 13.3853 26.7713 7.95457 20.0673 7.95457Z' fill='white'/%3E%3Cpath d='M17.1231 4.54566C18.7991 4.2568 20.4751 4.19902 22.1512 4.43012L23.307 0.270444C20.9953 -0.133969 18.568 -0.0761957 16.1406 0.38599L17.1231 4.54566Z' fill='%23F05722'/%3E%3Cpath d='M13.3634 5.75918C13.7102 5.58586 13.9991 5.47032 14.3459 5.35477C14.8082 5.18145 15.2128 5.0659 15.6751 4.89258L14.6926 0.73291C14.0569 0.90623 13.4212 1.13732 12.7855 1.36842C12.3231 1.54174 11.8608 1.77283 11.3984 1.94615L13.3634 5.75918Z' fill='%23F05722'/%3E%3Cpath d='M32.6133 29.3879L35.9653 32.1033C39.4329 27.5392 40.9355 21.4729 39.4907 15.4067L35.3296 16.3889C36.1965 20.0864 35.7341 24.015 33.8847 27.3658C33.538 28.1169 33.0756 28.8102 32.6133 29.3879Z' fill='%23F05722'/%3E%3Cpath d='M27.8736 6.45277L30.0119 2.75528C28.3359 1.77314 26.5443 1.07986 24.6949 0.617676L23.5391 4.71957C25.0417 5.06621 26.5443 5.64395 27.8736 6.45277Z' fill='%23F05722'/%3E%3Cpath d='M7.4652 10.5541C8.73665 8.87867 10.2971 7.49211 12.0887 6.45219L10.1815 2.63916C7.63858 4.08349 5.50023 6.04778 3.82422 8.35871L7.4652 10.5541Z' fill='%23F05722'/%3E%3Cpath d='M11.3412 33.1434C7.98922 30.948 5.61969 27.5972 4.695 23.6686C4.34824 22.282 4.23265 20.9532 4.29044 19.5667L0.013732 19.1045C-0.0440614 20.8955 0.0715253 22.802 0.533873 24.6507C1.80533 30.0236 5.15734 34.4144 9.54964 37.072L11.3412 33.1434Z' fill='%23F05722'/%3E%3Cpath d='M21.0498 35.6857C18.1023 35.9168 15.2126 35.2813 12.5541 33.8369L10.8203 37.7655C13.999 39.3832 17.5821 40.192 21.2809 39.9609L21.0498 35.6857Z' fill='%23F05722'/%3E%3Cpath d='M31.6853 30.5435C30.067 32.3922 27.9865 33.8365 25.6747 34.7031C25.039 34.9342 24.3455 35.1653 23.652 35.3386C23.2474 35.4542 22.9006 35.512 22.4961 35.5697L22.7273 39.8449C23.363 39.7294 23.9987 39.6716 24.6344 39.4983C25.5014 39.2672 26.3683 39.0361 27.2352 38.6895C30.2982 37.4762 32.9567 35.6275 35.0373 33.2588L31.6853 30.5435Z' fill='%23F05722'/%3E%3Cpath d='M3.02084 9.51416C2.73188 9.97635 2.5007 10.3808 2.26953 10.8429L6.08389 12.8072C6.08389 12.7495 6.14169 12.6917 6.14169 12.6339C6.31507 12.345 6.48845 12.0562 6.66183 11.7673L3.02084 9.51416Z' fill='%23F05722'/%3E%3Cpath d='M1.63544 12.1719C0.884126 13.9051 0.363986 15.7538 0.132812 17.6603L4.40952 18.0648C4.5829 16.6782 4.92966 15.3494 5.4498 14.0784L1.63544 12.1719Z' fill='%23F05722'/%3E%3C/svg%3E%0A");
  background-size: cover;
}

.content {

  display: grid;

  max-width: 770px;

  grid-auto-flow: row;
  grid-gap: 50px;
}

.capture {

  padding: 5px 0 5px 32px;

  border-left: 2px solid $color__primary;

  color: $color__block--primary;
  font-size: 32px;
  font-weight: 800;
  line-height: 39px;
}

.activeTab {

}

.title {

  strong {
    font-weight: 900;
  }

}

.description {

}

.switcher {

  //margin-top: 175px;
  display: none;

  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 45%, $color__light 35%, $color__light 100%);
}

.img {
  flex-direction: column;
  justify-content: flex-end;

  position: relative;

  display: flex;
  height: 350px;
  overflow: hidden;

  margin-top: 30px;

  transition: .5s;
  background: {
    position: center;
    repeat: no-repeat;
    size: cover;
  };

}

.bg {
  @include size(100%);
  flex-direction: column;
  justify-content: flex-end;

  display: flex;

  padding: 30px;

  background-color: transparent;

  opacity: 0;

  transition: all ease .4s;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
}

.slide {
  @mixin active {

    .slideTitle {
      color: $color__primary;
    }

    .bg {
      background: $color__primary;

      opacity: 1;
    }

    .slideDescription,
    .slideLink {
      opacity: 1;
    }
  }

  @for $i from 1 through 3 {
    &:nth-of-type(#{$i}) .img {
      background-image: url('/img/link_#{$i}.jpg');
    }
  }
  cursor: pointer;

  /*&--active {
    @include active;
  }*/

  /* &:hover {
     @include active;
   }*/
}

.slideTitle {

}

.slideDescription {

}

.slideLink {
  margin-top: 15px;

  border-color: $color__light;

  cursor: pointer;

  &:before {

  }
}

.accordion {

  background-color: $color__dark;

}

.accordionHeader {

  align-items: center;
  justify-content: center;

  display: flex;

  width: 56px;

  background-color: $color__dark;

  span {
    display: block;
    width: 24px;
    height: 24px;
    background: {
      size: contain;
      repeat: no-repeat;
    }
  }
}

.accordionContent {
  flex-direction: column;

  display: none;

  max-width: 0;
  overflow: hidden;

  background-color: $color__dark;

}

.accordionItem {
  display: flex;

  outline: none;

  &:nth-of-type(2) {

    .accordionHeader, .accordionContent {
      background-color: rgba(255, 255, 255, .05);
    }

  }

  &:nth-of-type(3) {

    .accordionHeader, .accordionContent {
      background-color: rgba(255, 255, 255, .1);
    }
  }

  &:hover, &:focus-visible, &:focus {
    outline: none;
  }
}

.accordionTitle {

  margin-bottom: 20px;

  color: $color__primary;
}

.accordionDescription {

  margin-bottom: 10px;

}

.accordionLink {

  margin-top: 20px;
}

.accordionShow {
  flex-grow: 1;

  .accordionHeader {
    display: none;
  }

  .accordionContent {

    flex-grow: 1;

    display: flex;
    max-width: 100%;

    padding: 30px;
  }
}

</style>
