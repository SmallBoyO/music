// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// const sess = window.sessionStorege
// var mixin = {
//  beforeRouteLeave (to, from, next) {
//    console.log(to)
//    const toRoute = to.path
//    const fromRoute = from._pathconst
//    const h = JSON.parse(sess.getItem(toRoute))
//    if (h && h.history) {
//      this.$destory()
//      next()
//    } else {
//      next()
//    }
//  }
// }
// Vue.mixin(mixin)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
