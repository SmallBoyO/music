<template>
  <div class="searchmusic">
    <div class="searchitem">
      <div class="search">
        <form class="search_input" action="#" method="get">
          <div class="input_cover">
            <i class="svg_search"></i>
            <input class="search_input" type="text" name="" value="">
            <label class="holder" for="">搜索歌曲,歌手,专辑</label>
          </div>
        </form>
        <div class="search_default" v-if="!hasInput">
          <section class="hot_list">
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
          <section class="search_history">
            <ul class="list">
              <li class="item">
                <i class="svg_history"></i>
                <div class="histry">
                  <span class="link">搜索词</span>
                  <figure class="close">
                    <i class="svg_close"></i>
                  </figure>
                </div>
              </li>
              <li class="item">
                <i class="svg_history"></i>
                <div class="histry">
                  <span class="link">搜索词</span>
                  <figure class="close">
                    <i class="svg_close"></i>
                  </figure>
                </div>
              </li>
              <li class="item">
                <i class="svg_history"></i>
                <div class="histry">
                  <span class="link">搜索词</span>
                  <figure class="close">
                    <i class="svg_close"></i>
                  </figure>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  data () {
    return {
      hasInput: true
    }
  }
}
</script>
<style lang="scss" type="text/css">
@import  "./searchmusic";
</style>
