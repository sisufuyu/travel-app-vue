<template>
    <div class="container" @click="handleGalleryClick">
        <div class="wrapper">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(item,index) in imgs" :key="index">
                    <img class="gallery-img" :src="item">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>
<script>
export default {
  name: 'CommonGallery',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleGalleryClick () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="stylus" scoped>
.container
  position fixed
  top 0
  bottom 0
  left 0
  right 0
  background-color #000
  z-index 999
  display flex
  flex-direction column
  justify-content center
  .wrapper
    width 100%
    height 0
    padding-bottom 100%
    .gallery-img
      width 100%
      display block
      margin-top 50%
      transform translateY(-50%)
    .swiper-pagination
      color #fff
</style>
