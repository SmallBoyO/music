// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

const sess = window.localStorage
var mixin = {
  beforeRouteLeave (to, from, next) {
    console.log(window)
    const toRoute = to.path
    const fromRoute = from.path
    const h = JSON.parse(sess.getItem(toRoute))
    if (h && h.history) {
      console.log('销毁组件')
      this.$destroy()
      h.history = false
      sess.removeItem(toRoute)
      next()
    } else {
      console.log('保存组件')

      sess.setItem(fromRoute, JSON.stringify({history: true}))
      next()
    }
  }
}
Vue.mixin(mixin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
