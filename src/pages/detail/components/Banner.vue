<template>
    <div>
        <div class="banner-wrapper" @click="handleBannerClick">
            <ul>
                <li class="banner-item">
                    <img class="banner-img" :src="bannerImg">
                </li>
            </ul>
            <div class="banner-info clearfix">
                <div class="banner-number"><span class="iconfont">&#xe757;</span>{{galleryImgs.length}}</div>
            </div>
        </div>
        <fade>
          <common-gallery :imgs="galleryImgs" v-show="showGallery" @close="handleGalleryClose"></common-gallery>
        </fade>
    </div>
</template>

<script>
import CommonGallery from '@/common/gallery/Gallery'
import Fade from '@/common/animation/Fade'
export default {
  name: 'DetailBanner',
  props: {
    bannerImg: String,
    galleryImgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      showGallery: false
    }
  },
  components: {
    CommonGallery,
    Fade
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGalleryClose () {
      this.showGallery = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner-wrapper
  position relative
  height auto
  width 100%
  margin 0 auto
  .banner-item
    width 100%
    height 250px
    overflow hidden
    background-color #eee
    .banner-img
      width 100%
  .banner-info
    position absolute
    left 0
    bottom 15px
    width 100%
    line-height .6rem
    .banner-number
      color #fff
      float right
      margin-right .2rem
      margin-bottom .1rem
      line-height .4rem
      height .4rem
      padding 0 .4rem
      border-radius .2rem
      background-color rgba(0,0,0,.6)
      font-size .24rem
      .iconfont
        font-size .24rem
</style>
