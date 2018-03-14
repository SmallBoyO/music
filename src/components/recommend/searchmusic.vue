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
        <section class="search_tuijian" v-if="!hasInput">
          <h3 class="title">
            搜索"helloworld"
          </h3>
        </section>
        <div class="search_res">
          <section class="match_list">
            <h3 class="title">最佳匹配</h3>
            <ul class="match_list">
              <li class="match_item album">
                <a href="#">
                  <div class="linkcover">
                    <figure class="piccover">
                      <img src="http://p3.music.126.net/8GJv6s8lMXrKCePnTEuBgQ==/3304032445729895.webp?imageView&thumbnail=100x0&quality=75&tostatic=0&type=webp" class="pic">
                    </figure>
                    <article class="describe">
                      <h4 class="maindes">专辑:
                        <p>
                          <span>Fate</span>
                        </p>
                      </h4>
                      <p class="addtional">
                        <span>Ravesplash</span>
                      </p>
                    </article>
                    <i class="svg_detail"></i>
                  </div>
                </a>
              </li>
              <li class="match_item artist">
                <a href="#">
                  <div class="linkcover">
                    <figure class="piccover">
                      <img src="http://p3.music.126.net/8GJv6s8lMXrKCePnTEuBgQ==/3304032445729895.webp?imageView&thumbnail=100x0&quality=75&tostatic=0&type=webp" class="pic">
                    </figure>
                    <article class="describe">
                      <h4 class="maindes">专辑:
                        <p>
                          <span>Fate</span>
                        </p>
                      </h4>
                      <p class="addtional">
                        <span>Ravesplash</span>
                      </p>
                    </article>
                    <i class="svg_detail"></i>
                  </div>
                </a>
              </li>
            </ul>
          </section>
          <section class="song_list">
            <div class="sglist">
              <a class="newsong_item">
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
            </div>
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
