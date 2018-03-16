<template>
  <div class="recommand">
    <div class="homerecommand">
      <h2 class="recommand_t1">推荐歌单</h2>
      <div class="recommand_songs">
        <div class="recommand_songs_ul clearfix">
          <a class="recommand_songs_li" v-for="data in recommendresources" :key="data.id">
            <div class="recommand_songs_image">
              <img class="u-img" :src="data.picUrl"/>
              <span>{{parseFloat(data.playCount/10000).toFixed(1) +'万'}}</span>
            </div>
            <p>{{data.name}}</p>
          </a>
        </div>
      </div>
      <h2 class="recommand_t1">最新音乐</h2>
      <div class="newsonglist">
        <a class="newsong_item" v-for="data in newsongs" :key="data.id">
          <div class="item_content clearfix">
            <div class="item_content_left">
              <div class="songsname">
                {{data.name}}
              </div>
              <div class="songsinfo">
                <i class="sq_icon"></i>
                <template v-for="(author,index) in data.song.artists">
                  {{ index==0?author.name:' / '+author.name }}
                </template>
                   - {{data.song.album.name}}
              </div>
            </div>
            <div class="item_content_right">
              <span class="play_song_icon"></span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import {recommendresource, newsong} from '../../api/recommend.js'
export default{
  data () {
    return {
      recommendresources: [],
      newsongs: []
    }
  },
  mounted () {
    recommendresource({}).then(data => {
      this.recommendresources = data.result.slice(0, 6)
    })
    newsong({}).then(data => {
      this.newsongs = data.result
      console.log(data.result)
    })
  }
}
</script>
<style lang="scss" type="text/css">
@import  "./recommandmusic";
</style>
