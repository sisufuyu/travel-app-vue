<template>
    <div>
        <div class="recommend-title">Recommend Tours</div>
        <div class="recommend-body clearfix">
          <div class="recommend-item" v-for="item in recommendList" :key="item.id">
              <div class="item-top">
                <div class="img-wrapper">
                  <img class="item-img" :src="item.imgUrl">
                </div>
                <div class="item-title-wrapper">
                  <div class="item-title">
                    <div class="item-title-main">{{item.titleMain}}</div>
                    <div class="item-title-sub">{{item.titleSub}}</div>
                  </div>
                </div>
              </div>
              <div class="item-detail">
                <p class="item-info">{{item.info}}</p>
                <p class="item-price">{{item.price}}</p>
              </div>
          </div>
        </div>
        <div class="recommend-btn">View More Recommend Tours<span class="iconfont">&#xe685;</span></div>
    </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixin.styl'
@import '~styles/common.styl'
.recommend-title
  font-size .36rem
  font-weight 700
  // background-color #eee
  line-height 0.8rem
  margin .16rem 0
  padding-left .32rem
  color #26282a
.recommend-body
  padding .2rem
.recommend-btn
  width 80%
  height .8rem
  line-height .8rem
  border 1px solid $themeColor
  border-radius .2rem
  font-size .28rem
  font-weight 400
  color $themeColor
  margin .32rem auto
  text-align center
  .iconfont
    font-size .28rem
    transform rotate(180deg)
    display inline-block
.recommend-item
  width 49%
  float left
  .item-top
    width 100%
    height 0
    padding-bottom 62.64%
    border-radius .1rem
    overflow hidden
    position relative
    .img-wrapper
      width 100%
      height 0
      padding-bottom 62.64%
    .item-img
      width 100%
  .item-title-wrapper
    position absolute
    left 0
    bottom 0
    width 100%
    height 40%
    background-color rgba(0,0,0,0.6)
    .item-title
      height 100%
      padding .1rem .24rem
      text-align center
      width fit-content
      margin 0 auto
      .item-title-main
        color #fff
        font-size .28rem
        font-weight 400
      .item-title-sub
        color #ffde00
        font-size .2rem
        margin-top .1rem
        font-weight 400
  .item-detail
    padding .1rem
    .item-info
      font-size .32rem
      line-height 1.2
      line-clamp(2)
    .item-price
      color #ff7400
      font-weight 550
      font-size .36rem
      margin-top .1rem
.recommend-item:nth-child(2n)
  margin-left 2%
</style>
