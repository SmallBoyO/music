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
          <a class="newsong_item" v-for="(data,index) in hotmusic.playlist.tracks" :key="data.id">
            <div class="song_top song_top_cred">
              {{index}}
            </div>
            <div class="item_content clearfix">
              <div class="item_content_left">
                <div class="songsname">
                  {{data.name}}
                </div>
                <div class="songsinfo">
                  <i class="sq_icon"></i>
                  xxx - Super love
                </div>
              </div>
              <div class="item_content_right">
                <span class="play_song_icon"></span>
              </div>
            </div>
          </a>
          <a class="newsong_item">
            <div class="song_top song_top_cred">
              01
            </div>
            <div class="item_content clearfix">
              <div class="item_content_left">
                <div class="songsname">
                  Super love
                </div>
                <div class="songsinfo">
                  <i class="sq_icon"></i>
                  xxx - Super love
                </div>
              </div>
              <div class="item_content_right">
                <span class="play_song_icon"></span>
              </div>
            </div>
          </a>
          <a class="newsong_item">
            <div class="song_top song_top_cred">
              02
            </div>
            <div class="item_content clearfix">
              <div class="item_content_left">
                <div class="songsname">
                  Super love
                  <span class="song_detail">(2018央视财经“厉害了我的国”活动主题歌)</span>
                </div>
                <div class="songsinfo">
                  <i class="sq_icon"></i>
                  xxx - Super love
                </div>
              </div>
              <div class="item_content_right">
                <span class="play_song_icon"></span>
              </div>
            </div>
          </a>
          <a class="newsong_item">
            <div class="song_top song_top_cred">
              03
            </div>
            <div class="item_content clearfix">
              <div class="item_content_left">
                <div class="songsname">
                  Super love
                  <span class="song_detail">(2018央视财经“厉害了我的国”活动主题歌)</span>
                </div>
                <div class="songsinfo">
                  <i class="sq_icon"></i>
                  xxx - Super love
                </div>
              </div>
              <div class="item_content_right">
                <span class="play_song_icon"></span>
              </div>
            </div>
          </a>
          <a class="newsong_item">
            <div class="song_top">
              04
            </div>
            <div class="item_content clearfix">
              <div class="item_content_left">
                <div class="songsname">
                  Super love
                  <span class="song_detail">(2018央视财经“厉害了我的国”活动主题歌)</span>
                </div>
                <div class="songsinfo">
                  <i class="sq_icon"></i>
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

  },
  mounted () {
    hotmusic({}).then(data => {
      this.hotmusic = data
      this.hotmusic.playlist.tracks = this.hotmusic.playlist.tracks.slice(0, 20)
      console.log(data)
    })
  }
}
</script>
<style lang="scss" type="text/css">
@import './hotmusic'
</style>
