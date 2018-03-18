<template>
  <div class="appcontent">
    <musicheader></musicheader>
    <div class="content">
    <nav id="tabs" class="tabs">
      <li class="tab" :class="isselected('recommandmusic')" @click="toggleTab('recommandmusic')">
       <div class="tabtxt">
          <span>推荐音乐</span>
       </div>
      </li>
     <li class="tab" :class="isselected('hotmusic')" @click="toggleTab('hotmusic')">
       <div class="tabtxt">
         <span>热歌榜</span>
       </div>
     </li>
     <li class="tab" :class="isselected('searchmusic')" @click="toggleTab('searchmusic')">
       <div class="tabtxt">
         <span>搜索</span>
       </div>
     </li>
   </nav>
    <transition name="slide-fade" mode="out-in">
   <prince :is="currentTab" keep-alive></prince>
    </transition>
  </div>
  </div>
</template>
<script>
import hotmusic from './hotmusic'
import recommandmusic from './recommandmusic'
import searchmusic from './searchmusic'
import musicheader from '../common/musicheader'
export default{
  components: {
    hotmusic,
    recommandmusic,
    searchmusic,
    musicheader
  },
  data () {
    return {
      imageurl: 'http://img.blog.csdn.net/20170319103216115?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvWmhvb3Nvbg==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast',
      currentTab: 'hotmusic'
    }
  },
  methods: {
    toggleTab (tabname) {
      this.currentTab = tabname
    },
    isselected (tabname) {
      console.log(tabname)
      if (this.currentTab === tabname) {
        return {'tab-selected': true}
      } else {
        return {'tab-selected': false}
      }
    }
  },
  computed: {
  }
}
</script>
<style lang="scss" type="text/css">
.content{
  overflow:hidden;   //关键
  position:relative;
}
</style>
