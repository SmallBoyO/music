<template>
  <div class="songsheet">
    <div class="playlist">
      <section class="sheetheader">
        <div class="head_bg" :style="getbg()">
        </div>
        <div class="headwrap">
          <div class="headleft">
            <img :src="songsheetinfo.coverImgUrl" alt="">
            <span class="songsheetlabel">
              歌单
            </span>
            <i class="hearnum">
              {{parseFloat(songsheetinfo.playCount/10000).toFixed(1) +'万'}}
            </i>
          </div>
          <div class="headright">
            <h2 class="songsheetname">
              {{songsheetinfo.name}}
            </h2>
            <div class="songsheetauth">
              <a href="#" class="authlink">
                <div class="headeimg">
                  <img :src="user.profile.avatarUrl" alt="">
                  <span class="ava-icon-daren"></span>
                </div>
                {{user.profile.nickname}}
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="songsheetinfo">
        <div class="taglist">
          标签:
          <em class="lstit_tag" v-for="data in songsheetinfo.tags" :key="data.id">
            {{data}}
          </em>
        </div>
        <div class="info">
          <div class="info_content" :class="songsheetinfohidden?'infohidden':''">
            <template v-for="(data,index) in descriptions">
              <span :key="index">
                <i>
                  {{data}}
                </i>
                <br>
              </span>
            </template>
          </div>
          <span  :class="songsheetinfohidden?'u-arowdown':'u-arowup'" @click="changeSongSheetInfohidden"></span>
        </div>
      </section>
      <div class="song_list">
        <h3>歌曲列表</h3>
        <ol class="list">
          <li class="list_item" v-for="(data,index) in songsheetinfo.tracks" :key="data.id" @click="play(data.id)">
            <div class="item_left">
              {{index+1}}
            </div>
            <div class="item_right">
              <div class="info">
                <div class="song_name hiddentxt hiddentxt">
                  {{data.name}}
                </div>
                <div class="song_info hiddentxt hiddentxt">
                  <template v-for="(author,index) in data.artists">
                    {{ index==0?author.name:' / '+author.name }}
                  </template>
                     - {{data.album.name}}
                </div>
              </div>
              <div class="playicon">
                <span class="play_song_icon"></span>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import {detail} from '../../api/songsheet.js'
import {userdetail} from '../../api/user.js'
export default {
  data () {
    return {
      songsheetinfo: {},
      descriptions: [],
      user: {},
      songsheetinfohidden: true
    }
  },
  methods: {
    getsongsheetinfo (id) {
      detail({id: id}).then(data => {
        console.log(data)
        this.songsheetinfo = data.result
        this.descriptions = this.songsheetinfo.description.split('\n')
        userdetail({id: this.songsheetinfo.userId}).then(data => {
          this.user = data
          console.log(data)
        })
      })
    },
    getbg () {
      return 'background-image:url("' + this.songsheetinfo.coverImgUrl + '");'
    },
    play (id) {
      this.$router.push('/playmusic/' + id)
    },
    changeSongSheetInfohidden () {
      this.songsheetinfohidden = !this.songsheetinfohidden
    }
  },
  created () {
    this.getsongsheetinfo(this.$route.params.id)
  }
}
</script>

<style lang="scss" type="text/css">
@import  "./songsheet";
@import "../../scss/common"
</style>
