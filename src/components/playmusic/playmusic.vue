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
                <span class="song_name">月と花束（TV动画《Fate/EXTRA Last Encore》片尾曲）</span>
                <span class="song_gap">-</span>
                <b class="song_autr">さユり</b>
              </h2>
              <div class="song_lrc">
                <div class="song_scroll">
                  <div class="song_iner" :style="song_linertransform">
                    <p class="song_lritem" style="color: rgb(255, 255, 255);" v-for="data in lyrics">
                      <span class="song_lrori">{{data}}</span>
                      <span class="song_lrtra">&nbsp;</span>
                    </p>
                    <p class="song_lritem" style="color: rgb(255, 255, 255);">
                      <span class="song_lrori">作曲 : さユり</span>
                      <span class="song_lrtra">&nbsp;</span>
                    </p>
                    <p class="song_lritem" style="">
                      <span class="song_lrori">花を焼べて 詩を焼べて1</span>
                      <span class="song_lrtra">拾花为柴 焚诗作薪</span>
                    </p>
                    <p class="song_lritem" style="">
                      <span class="song_lrori">花を焼べて 詩を焼べて2</span>
                      <span class="song_lrtra">拾花为柴 焚诗作薪</span>
                    </p>
                    <p class="song_lritem" style="">
                      <span class="song_lrori">花を焼べて 詩を焼べて3</span>
                      <span class="song_lrtra">拾花为柴 焚诗作薪</span>
                    </p>
                    <p class="song_lritem" style="">
                      <span class="song_lrori">花を焼べて 詩を焼べて4</span>
                      <span class="song_lrtra">拾花为柴 焚诗作薪</span>
                    </p>
                    <p class="song_lritem" style="">
                      <span class="song_lrori">花を焼べて 詩を焼べて5</span>
                      <span class="song_lrtra">拾花为柴 焚诗作薪</span>
                    </p>
                    <p class="song_lritem" style="">
                      <span class="song_lrori">花を焼べて 詩を焼べて6</span>
                      <span class="song_lrtra">拾花为柴 焚诗作薪</span>
                    </p>
                    <p class="song_lritem" style="">
                      <span class="song_lrori">花を焼べて 詩を焼べて7</span>
                      <span class="song_lrtra">拾花为柴 焚诗作薪</span>
                    </p>
                    <p class="song_lritem" style="">
                      <span class="song_lrori">花を焼べて 詩を焼べて8</span>
                      <span class="song_lrtra">拾花为柴 焚诗作薪</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button @click="add">add</button>
  </div>
</template>

<script>
import {lyric} from '../../api/player.js'
export default {
  data () {
    return {
      translateY: 0,
      lyrics: []
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
    add () {
      console.log('add')
      this.translateY -= 49
    },
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
      lyric({id: id}).then(data => {
        console.log(data)
        this.lyrics = data.lrc.lyric.split('\n')
        for (var lyric in data.lrc.lyric.split('\n')) {
          if (data.lrc.lyric.split('\n')[lyric] !== '') {
            console.log(data.lrc.lyric.split('\n')[lyric].match('\\[(\\S+)\\]')[1])
          }
        }
      })
    }
  },
  created () {
    this.getlyric(this.$route.params.id)
    console.log(this.$route.params.id)
  },
  watch: {
    curTime: function (newvalue, oldvalue) {
      console.log(newvalue)
    }
  }
}
</script>

<style lang="scss" type="text/css">
@import './playmusic'
</style>
