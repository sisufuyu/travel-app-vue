<template>
    <div>
        <div class="title">Travel Articles</div>
        <div class="travel-article" v-for="item in travelList" :key="item.id">
          <div class="article-title">{{item.title}}</div>
          <div class="article-body border-bottom">
            <div class="article-img-wrapper">
              <img class="article-img" :src="item.imgUrl">
            </div>
            <div class="article-info">
              <div class="article-summary">{{item.summary}}</div>
              <button class="article-btn">View More</button>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'HomeTravel',
  props: {
    travelList: Array
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixin.styl';
@import '~styles/common.styl';
.title
  font-size .36rem
  font-weight 700
  // background-color #eee
  line-height 0.8rem
  margin .2rem 0 .1rem
  padding-left .32rem
  color #26282a
.article-title
  padding .1rem .3rem
  font-size .36rem
  font-weight 550
  margin-top .2rem
.article-body
  padding .2rem .3rem .3rem
  display flex
  .article-img-wrapper
    flex none
    width 2.25rem
    height 2.25rem
    border-radius .1rem
    overflow hidden
    .article-img
      width 100%
  .article-info
    flex 1
    margin-left .3rem
    position relative
    .article-summary
      font-size .28rem
      color $lightTextColor
      line-height 1.3em
      line-clamp(4)
    .article-btn
      padding .1rem 0.3rem
      border none
      border-radius 9999px
      font-size .28rem
      position absolute
      left 0
      bottom 0
      background linear-gradient(to right,#ff953f,#ff643f)
      color #fff
</style>
