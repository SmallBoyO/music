<template>
  <div class="searchmusic">
    <div class="searchitem">
      <div class="search">
        <form class="search_input" action="#" method="get">
          <div class="input_cover">
            <i class="svg_search"></i>
            <input class="search_input" v-model="searchstr" type="text" name="" value="" @input="changesearchstr" @keyup.enter="search">
            <label class="holder" for="" v-if="searchstr.length==0">搜索歌曲,歌手,专辑</label>
          </div>
        </form>
        <div class="search_default" v-if="!hasSearch && searchstr.length==0">
          <!-- <section class="hot_list">
            <h3 class="title">热门搜索</h3>
            <ul class="list">
              <li class="item">
                <a href="#">徐梦圆</a>
              </li>
              <li class="item"><a href="#">徐sds梦圆</a></li>
              <li class="item"><a href="#">徐梦sd圆</a></li>
              <li class="item"><a href="#">徐梦sd圆</a></li>
              <li class="item"><a href="#">徐sddd梦圆</a></li>
              <li class="item"><a href="#">徐sss梦圆</a></li>
              <li class="item"><a href="#">徐梦圆</a></li>
              <li class="item"><a href="#">徐ss梦圆</a></li>
              <li class="item"><a href="#">徐sss梦圆</a></li>
              <li class="item"><a href="#">徐梦圆</a></li>
              <li class="item"><a href="#">徐ssssssss梦圆</a></li>
            </ul>
          </section>
          -->
          <section class="search_history">
            <ul class="list">
              <li class="item" v-for="(data,index) in this.searchhistory" @click="historysearch(data)" :key="index">
                <i class="svg_history"></i>
                <div class="histry">
                  <span class="link">{{data}}</span>
                  <figure class="close" @click.stop="remove(index)">
                    <i class="svg_close"></i>
                  </figure>
                </div>
              </li>
            </ul>
          </section>
        </div>
        <section class="search_tuijian" v-if="searchstr.length!=0">
          <h3 class="title" v-if="searchstr.length!=0"  @click="search">
            搜索"{{searchstr}}"
          </h3>
        </section>
        <div class="search_res" v-if="hasSearch">
          <section class="match_list">
            <h3 class="title">最佳匹配</h3>
            <ul class="match_list">
              <template v-for="data in mutimatch.orders">
                <li :class="getSearchItemClass(data)" v-for="childdata in mutimatch[data]" :key="index">
                  <a href="#">
                    <div class="linkcover">
                      <figure class="piccover">
                        <template v-if="data =='album'">
                          <img :src="childdata.picUrl" class="pic">
                        </template>
                        <template v-if="data =='artist'">
                        <img :src="childdata.img1v1Url" class="pic">
                        </template>
                      </figure>
                      <article class="describe">
                        <h4 class="maindes">
                          <template v-if="data =='album'">
                          专辑:
                          </template>
                          <template v-if="data =='artist'">
                          歌手:
                          </template>
                          <p>
                            <span>
                              {{childdata.name}}
                              <template v-if="data =='artist'">
                              {{childdata.alias.length>0?'('+childdata.alias[0]+')':''}}
                              </template>
                            </span>
                          </p>
                        </h4>
                        <p class="addtional">
                          <span v-if="data =='album'">{{childdata.artist.name}}</span>
                        </p>
                      </article>
                      <i class="svg_detail"></i>
                    </div>
                  </a>
                </li>
              </template>
            </ul>
          </section>
          <section class="song_list">
            <div class="sglist">
              <a class="newsong_item" v-for="(data,inde) in searchresdata" @click="playmusic(data.id)">
                <div class="item_content clearfix">
                  <div class="item_content_left">
                    <div class="songsname">
                      {{data.name}}
                    </div>
                    <div class="songsinfo">
                      <i class="sq_icon"></i>
                      <template v-for="(author,index) in data.artists">
                        {{ index==0?author.name:' / '+author.name }}
                      </template> - Super love
                    </div>
                  </div>
                  <div class="item_content_right">
                    <span class="play_song_icon"></span>
                  </div>
                </div>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {search, multimatch} from '../../api/search.js'
// import {getMusicUrlById} from '../../api/player.js'
export default{
  data () {
    return {
      hasSearch: false,
      searchstr: '',
      searchresdata: [],
      mutimatch: {},
      searchhistory: []
    }
  },
  methods: {
    search () {
      this.hasSearch = true
      multimatch({word: this.searchstr}).then(data => {
        this.mutimatch = data.result
        console.log(data)
      })
      search({word: this.searchstr}).then(data => {
        this.searchresdata = data.result.songs
        console.log(data)
        this.searchstr = ''
      })
      this.searchhistory.unshift(this.searchstr)
      if (this.searchhistory.length > 15) {
        this.searchhistory.pop()
      }
      window.localStorage.setItem('searchhistory', JSON.stringify(this.searchhistory))
    },
    historysearch (str) {
      this.hasSearch = true
      multimatch({word: str}).then(data => {
        this.mutimatch = data.result
        console.log(data)
      })
      search({word: str}).then(data => {
        this.searchresdata = data.result.songs
        console.log(data)
        this.searchstr = ''
      })
      this.searchhistory.unshift(str)
      if (this.searchhistory.length > 15) {
        this.searchhistory.pop()
      }
      window.localStorage.setItem('searchhistory', JSON.stringify(this.searchhistory))
    },
    getSearchItemClass (type) {
      return 'match_item ' + type
    },
    changesearchstr () {
      if (this.searchstr === '') {
        this.hasSearch = false
      }
    },
    playmusic (id) {
      console.log(id)
      this.$router.push('/playmusic/' + id)
    },
    remove (index) {
      console.log('remove!!!!!')
      this.searchhistory.splice(index, 1)
      window.localStorage.setItem('searchhistory', JSON.stringify(this.searchhistory))
    }
  },
  created () {
    this.searchhistory = JSON.parse(window.localStorage.getItem('searchhistory'))
  }
}
</script>
<style lang="scss" type="text/css">
@import  "./searchmusic";
</style>
