import Vue from 'vue'
import Router from 'vue-router'
// import recommend from '@/components/recommend/recommend'
// import playmusic from '@/components/playmusic/playmusic'
// import songsheet from '@/components/songsheet/songsheet'
const home = r => require.ensure([], () => r(require('@/components/home/home')), 'recommend')
const playmusic = r => require.ensure([], () => r(require('@/components/playmusic/playmusic')), 'playmusic')
const songsheet = r => require.ensure([], () => r(require('@/components/songsheet/songsheet')), 'songsheet')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }, {
      path: '/playmusic/:id',
      component: playmusic
    }, {
      path: '/songsheet/:id',
      component: songsheet
    }
  ]
})
