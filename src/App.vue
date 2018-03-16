<template>
  <div id="app" class="app">
    <musicaudio></musicaudio>
    <router-view/>
    <button @click="play">
      play(播放)
    </button>
    <button @click="pause">
      pause(暂停)
    </button>
    <input v-model="newurl"/>
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
    // this.$router.push('/playmusic')
    // login({phone: '15232502010', password: 'xxxxxx'}).then(data => {
    //  console.log(data)
  //  })
  }
}
</script>

<style lang="scss" type="text/css">
@import  "./scss/reset";
@import  "./scss/tab";
</style>
