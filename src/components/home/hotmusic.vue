<template>
  <div class="hotmusic">
    <div class="hotmusiccontent">
      <div class="hmhot">
        <div class="hottop">
          <div class="hottoppic">
            <div class="hot_icon">
            </div>
            <div class="hot_time">
              更新日期：{{new Date(hotmusic.playlist.createTime).getMonth()+1}}
            </div>
          </div>
        </div>
      </div>
      <div class="hotcontent">
        <div class="newsonglist">
          <a class="newsong_item" v-for="(data,index) in hotmusic.playlist.tracks" :key="data.id" @click="playmusic(data.id)">
            <div :class="{song_top:true,song_top_cred:index<3}">
              {{index>8?(index+1):('0'+(index+1))}}
            </div>
            <div class="item_content clearfix">
              <div class="item_content_left">
                <div class="songsname">
                  {{data.name}}
                </div>
                <div class="songsinfo">
                  <i class="sq_icon" v-if="data.h.vd==0"></i>
                  xxx - Super love
                </div>
              </div>
              <div class="item_content_right">
                <span class="play_song_icon"></span>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="hotend">
        <span>查看完整榜单</span>
      </div>
    </div>
  </div>
</template>
<script>
import {hotmusic} from '../../api/hot.js'
export default{
  data () {
    return {
      hotmusic: {}
    }
  },
  methods: {
    playmusic (id) {
      console.log(id)
      this.$router.push('/playmusic/' + id)
    }
  },
  mounted () {
    hotmusic({}).then(data => {
      this.hotmusic = data
      this.hotmusic.playlist.tracks = this.hotmusic.playlist.tracks.slice(0, 20)
      console.log(this.hotmusic.playlist.tracks)
      console.table(this.hotmusic.playlist.tracks[7])
      console.table(this.hotmusic.playlist.tracks[8])
    })
  }
}
</script>
<style lang="scss" type="text/css">
@import './hotmusic'
</style>
