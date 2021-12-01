<template>
    <div class="banner-swiper">
        <div class="swiper-container">
          <swiper :options="swiperOption" v-if="showSwiper">
            <swiper-slide v-for="item of swiperList" :key="item.id">
              <img class="swiper-img" :src="item.imgUrl">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"><span class="iconfont">&#xe685;</span></div>
            <div class="swiper-button-next" slot="button-next"><span class="iconfont">&#xe687;</span></div>
          </swiper>
        </div>
    </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        pagination: '.swiper-pagination',
        observer: true,
        observeParent: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  }
}
</script>
<style lang="stylus" scoped>
.banner-swiper >>> .swiper-pagination-bullet-active
  background-color white !important
.banner-swiper
  width 100%
  height 56.25vw
  background-color #eee
.swiper-container
  width 100%
  height 100%
  .swiper-slide
    width 100%
    height 100%
    .swiper-img
      width 100%
  .swiper-button-prev
    left: 0
  .swiper-button-next
    right 0
  .swiper-button-prev,.swiper-button-next
    width .6rem
    height .8rem
    line-height 1
    background-size .4rem .6518rem
    background-color rgba(0,0,0,0.3)
    background-image none
    text-align center
    .iconfont
      display inline-block
      color #fff
      font-size .4rem
      margin-top .2rem
</style>
