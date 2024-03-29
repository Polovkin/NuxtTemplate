import Vue from 'vue'
import inViewportDirective from 'vue-in-viewport-directive'
import VueObserveVisibility from 'vue-observe-visibility'

Vue.directive('in-viewport', inViewportDirective)

Vue.use(VueObserveVisibility)

Vue.directive('click-outside', {
  bind(el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      if (!(el === event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event)
      }
    }
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unbind(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  },
})
