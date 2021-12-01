<template>
    <div class="icons-wrapper">
        <swiper :options="swiperOption" ref="IconSwiper">
          <swiper-slide v-for="(page,index) of pages" :key="index">
            <div class="icon" v-for="item in page" :key="item.id">
              <div class="icon-img-wrapper">
                <img class="icon-img" :src="item.imgUrl">
              </div>
              <p>{{item.iconName}}</p>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    pages () {
      var pages = []
      this.iconList.forEach((item, index) => {
        var page = Math.floor(index / 4)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/common.styl'
.icons-wrapper >>> .swiper-container
  height 100%
.icons-wrapper >>> .swiper-pagination-bullet
  width .08rem
  height .08rem
.icons-wrapper >>> .swiper-pagination-bullet-active
  width .28rem
  border-radius .04rem
  background-color $themeColor
.swiper-pagination
  bottom 0 !important
.icons-wrapper
  width 100%
  height 30vw
.swiper-slide
  display flex
  flex-direction row
  .icon
    width 25%
    display flex
    flex-direction column
    align-items center
    .icon-img-wrapper
      width 70%
      height 0
      padding-bottom 70%
      margin .2rem 0
      .icon-img
        width 100%
</style>
