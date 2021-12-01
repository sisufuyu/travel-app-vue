<template>
    <div class="attraction">
        <div class="attraction-title">Attractions</div>
        <div class="attraction-wrapper">
            <swiper :options="swiperOption">
              <swiper-slide v-for="item in attractionList" :key="item.id">
                <div class="attraction-item">
                  <div class="img-wrapper">
                    <img :src="item.imgUrl" class="attraction-img">
                  </div>
                  <div class="attraction-info">
                    <div class="attraction-name">{{item.name}}</div>
                    <div class="attraction-detail">{{item.info}}</div>
                    <router-link :to="'/detail/' + item.id">
                      <div class="attraction-btn">View Details</div>
                    </router-link>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script>
export default {
  name: 'HomeAttractions',
  props: {
    attractionList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 'auto'
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/common.styl';
@import '~styles/mixin.styl';
.attraction-title
  font-size .36rem
  font-weight 700
  // background-color #eee
  line-height 0.8rem
  margin .16rem 0
  padding-left .32rem
  color #26282a
.swiper-slide
  width 70% !important
  margin .2rem 0.4rem !important
.attraction-wrapper
  background-color #eee
.attraction-item
  width 100%
  max-width 320px
  border-radius .16rem
  overflow hidden
  box-shadow 5px 5px 10px #ccc
  .img-wrapper
    width 100%
    height 0
    padding-bottom 66.56%
  .attraction-img
    width 100%
  .attraction-info
    width 100%
    height 0
    padding-bottom 50%
    border-radius 0 0 .16rem .16rem
    border 1px solid #efefef
    border-top none
    position relative
    box-sizing border-box
    background-color #fff
  .attraction-name
    font-size .36rem
    font-weight 550
    padding .2rem
  .attraction-detail
    font-size .28rem
    color $lightTextColor
    line-height 1.3em
    padding 0 .2rem .2rem .2rem
    line-clamp(2)
  .attraction-btn
    padding .1rem 0.2rem
    width 2rem
    border none
    border-radius 999px
    font-size .28rem
    font-weight 500
    line-height 1.5
    text-align center
    color #fff
    background linear-gradient(to bottom,#fac928 0,#ff9800 100%)
    position absolute
    left 50%
    bottom .2rem
    transform translateX(-50%)
</style>
