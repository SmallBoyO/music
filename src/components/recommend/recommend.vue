<template>
  <div>
    <nav id="tabs" class="tabs">
     <li class="tab tab-selected" @click="toggleTab('hotmusic')">
       <div class="tabtxt">
         <a>热歌榜</a>
       </div>
     </li>
     <li class="tab" @click="toggleTab('recommandmusic')">
      <div class="tabtxt">
         <a>推荐音乐</a>
      </div>
     </li>
     <li class="tab" @click="toggleTab('searchmusic')">
       <div class="tabtxt">
         <a>搜索</a>
       </div>
     </li>
   </nav>
    <prince :is="currentTab" keep-alive></prince>
  </div>
</template>
<script>
import hotmusic from './hotmusic'
import recommandmusic from './recommandmusic'
import searchmusic from './searchmusic'
export default{
  components: {
    hotmusic,
    recommandmusic,
    searchmusic
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
    }
  }
}
</script>
<style lang="scss" type="text/css">
.tabs{
    background-color: "red"
}
<style>
