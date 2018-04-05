<template>
  <div class="hotmusic">
    <div class="hotmusiccontent" v-if="!isloading">
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
                  <i class="sq_icon"></i>
                  <template v-for="(author,index) in data.ar">
                    {{ index==0?author.name:' / '+author.name }}
                  </template>
                     - {{data.al.name}}
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
    <loading v-show="isloading"></loading>
  </div>
</template>
<script>
import {hotmusic} from '../../api/hot.js'
import loading from '../common/loading'
export default{
  components: {
    loading
  },
  data () {
    return {
      hotmusic: {},
      isloading: true
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
      console.log('stop loading')
      this.isloading = false
    })
  }
}
</script>
<style lang="scss" type="text/css">
@import './hotmusic'
</style>
