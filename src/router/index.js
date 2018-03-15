import Vue from 'vue'
import Router from 'vue-router'
import recommend from '@/components/recommend/recommend'
import playmusic from '@/components/playmusic/playmusic'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'recommend',
      component: recommend
    }, {
      path: '/playmusic',
      component: playmusic
    }
  ]
})
