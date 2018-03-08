<template>
  <div>
    <img width="100%" height="100%" v-lazyload="imageurl"/>
  </div>
</template>
<script>
export default{
  data () {
    return {
      imageurl: 'http://img.blog.csdn.net/20170319103216115?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvWmhvb3Nvbg==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast'
    }
  }
}
</script>
