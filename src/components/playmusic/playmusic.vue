<template>
  <div class="musicplay">
    <div class="songwrap" @click="pause">
      <div class="songbg" style='background-image:url("//music.163.com/api/img/blur/109951163170276615");opacity: 1;'>
        play
      </div>
      <div class="song_scroll_wrapper">
        <div class="song_scroll_scroller">
          <div class="song_player" style="height:607px;">
            <span class="m-logo"></span>
            <div class="song_wrap">
              <div class="song_disk">
                <div class="song_turn">
                  <div :class="{song_rollwrap:true,song_pause:!playingstatus}">
                    <div class="song_img">
                      <img src="http://p1.music.126.net/0fNqjjWb3srRgcsb0w7Qzg==/109951163170276615.jpg?imageView&thumbnail=360y360&quality=75&tostatic=0" alt=""/>
                    </div>
                  </div>
                  <div class="song_lgour">
                    <div class="song_light">
                    </div>
                  </div>
                </div>
                <span class="song_plybtn" v-if="!playingstatus">
                </span>
              </div>
            </div>
            <div class="song_info">
              <h2 class="song_h2">
                <span class="song_name">{{song.name}}</span>
                <span class="song_gap">-</span>
                <b class="song_autr">{{song.ar[0].name}}</b>
              </h2>
              <div class="song_lrc">
                <div class="song_scroll">
                  <div class="song_iner" :style="song_linertransform">
                    <p class="song_lritem" :style="wordstyle(index)" v-for="(data,index) in lyrics" :key="index+''">
                      <span class="song_lrori">{{data}}</span>
                      <span class="song_lrtra">&nbsp;</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {lyric, songdetail} from '../../api/player.js'
export default {
  data () {
    return {
      translateY: 0,
      lyrics: [], // 字幕
      lyrictimes: [], // 字幕时间节点
      currentlyricsindex: 0, // 当前字幕位置
      song: {}
    }
  },
  computed: {
    song_linertransform () {
      return 'transform: translateY(' + this.translateY + 'px)'
    },
    playingstatus () {
      console.log(this.$store.state.playingSongs.playingstatus)
      return this.$store.state.playingSongs.playingstatus
    },
    curTime () {
      return this.$store.state.playingSongs.curTime
    }
  },
  methods: {
    pause () {
      console.log('pause')
      if (this.playingstatus === true) {
        console.log('展厅')
        this.$store.commit('changePlayingStatus', false)
      } else {
        this.$store.commit('changePlayingStatus', true)
      }
    },
    getlyric (id) {
      songdetail({id: id}).then(data => {
        this.song = data.songs[0]
      })

      lyric({id: id}).then(data => {
        console.log(data)
        // this.lyrics = data.lrc.lyric.split('\n')
        var tempdata = []
        var templyrics = []

        var splitresult = data.lrc.lyric.split('\n')

        for (var lyric in splitresult) {
          if (splitresult[lyric] !== '') {
            console.log(splitresult[lyric].replace(' ', ''))
            if (data.lrc.lyric.split('\n')[lyric].match('\\]([\\S,\\s]*)')[1] !== '') {
              tempdata.push(splitresult[lyric].replace(' ', '').match('\\[(\\S+)\\]')[1])
              templyrics.push(data.lrc.lyric.split('\n')[lyric].match('\\]([\\S,\\s]*)')[1])
            }
          }
        }
        this.lyrics = templyrics
        this.lyrictimes = tempdata
      })
    },
    wordstyle (index) {
      let tempindex = index + ''
      if (this.currentlyricsindex === tempindex) {
        return 'color: rgb(255, 255, 255);'
      } else {
        return ''
      }
    }
  },
  created () {
    this.getlyric(this.$route.params.id)
    console.log(this.$route.params.id)
  },
  watch: {
    curTime: function (newvalue, oldvalue) {
      let currenttime = 0
      for (var index in this.lyrictimes) {
        let minutes = this.lyrictimes[index].split(':')[0]
        let seconds = this.lyrictimes[index].split(':')[1].split('.')[0]
        let smallseconds = this.lyrictimes[index].split(':')[1].split('.')[1]
        let time = 60 * parseFloat(minutes) + parseFloat(seconds) + 0.001 * (smallseconds)
        if (newvalue > time) {
          currenttime = index
        } else {
          break
        }
      }
      this.currentlyricsindex = currenttime
      this.translateY = -49 * currenttime + 49 * 1
    }
  }
}
</script>

<style lang="scss" type="text/css">
@import './playmusic'
</style>
