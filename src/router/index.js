import Vue from 'vue'
import Router from 'vue-router'
import recommend from '@/components/recommend/recommend'
import playmusic from '@/components/playmusic/playmusic'
import songsheet from '@/components/songsheet/songsheet'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'recommend',
      component: recommend
    }, {
      path: '/playmusic/:id',
      component: playmusic
    }, {
      path: '/songsheet/:id',
      component: songsheet
    }
  ]
})
