<template>
  <div id="app" class="app">
    <musicaudio></musicaudio>
    <keep-alive>
    <router-view/>
  </keep-alive>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import musicaudio from './components/musicaudio'
// import {login} from './api/login.js'
export default {
  name: 'App', //
  components: {
    musicaudio
  },
  data () {
    return {
      newurl: 'http://sc1.111ttt.cn/2017/1/11/11/304112002493.mp3'
    }
  },
  computed: mapState({
    songUrl: state => state.playingSongs.songUrl,
    playingstatus: state => state.playingSongs.playingstatus
  }),
  methods: {
    play () {
      this.changeMusic(this.newurl)
    },
    // 暂停/继续
    pause () {
      if (this.playingstatus === true) {
        this.$store.commit('changePlayingStatus', false)
      } else {
        this.$store.commit('changePlayingStatus', true)
      }
    },
    // 更换音乐(自动播放)
    changeMusic (Url) {
      if (this.songUrl !== Url) {
        this.$store.commit('changePlayingStatus', false)
        this.$store.commit('changeSongs', Url)
      } else {
        this.$store.commit('changePlayingStatus', true)
      }
    }
  },
  created () {
<<<<<<< HEAD
    // this.$router.push('/playmusic')
    // login({phone: '15232502010', password: 'xxxxxx'}).then(data => {
    //  console.log(data)
  //  })
=======
>>>>>>> 1c042e9... 修改文件结构  添加页面组件缓存(后退使用缓存 前进刷新组件)
  }
}
</script>

<style lang="scss" type="text/css">
@import  "./scss/common";
@import  "./scss/tab";
</style>
