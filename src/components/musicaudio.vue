<template>
  <audio :src="songUrl" ref="player" @timeupdate="updateCurTime" @durationchange="changeDuration"  @canplay="playMusic" @ended="ended">
    不支持
  </audio>
</template>
<script>
import { mapState } from 'vuex'
export default{
  computed: mapState({
    songUrl: state => state.playingSongs.songUrl,
    playingstatus: state => state.playingSongs.playingstatus
  }),
  methods: {
    playMusic () {
      this.$store.commit('changePlayingStatus', true)
    },
    changeDuration () {
      this.$store.commit('changeMusicDuration', this.$refs.player.duration)
    },
    updateCurTime () {
      this.$store.commit('changeCurTime', this.$refs.player.currentTime)
    },
    ended () {
      this.$store.commit('changePlayingStatus', false)
    }
  },
  watch: {
    playingstatus (status) {
      console.log('playingstatus has changed,new status is ' + status)
      if (status === true) {
        this.$refs.player.play()
      } else {
        this.$refs.player.pause()
      }
    },
    songUrl (newurl, oldurl) {
      console.log('songUrl has changed,new songUrl is ' + newurl)
      this.$nextTick(() => {
        this.$store.commit('changePlayingStatus', true)
      })
    }
  }
}
</script>
