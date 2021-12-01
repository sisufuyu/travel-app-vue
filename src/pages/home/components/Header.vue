<template>
  <div class="header">
    <div class="header-back"><div class="iconfont icon-arrow-left-bold"></div></div>
    <div class="header-search"><span class="iconfont icon-search"></span><input placeholder="Where to?"></div>
    <router-link to="/city">
      <div class="header-city">{{this.departureCity.spell}}<span class="iconfont icon-arrow-down-filling"></span></div>
    </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['departureCity'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/common.styl'
.header
  display flex
  line-height $headerHeight
  height $headerHeight
  background-color $themeColor
  color #fff
  width 100%
  .header-back
    height $headerHeight
    text-align center
    margin-right .1rem
    .icon-arrow-left-bold
      font-size 0.48rem
  .header-city
    min-width 1rem
    font-size 0.28rem
    color white
    flex none
    margin-left .1rem
    .icon-arrow-down-filling
      font-size 0.3rem
      margin-left: .1rem
      margin-right .1rem
  .header-search
    flex 1
    background-color #fff
    border-radius 9999px
    margin .12rem .1rem
    padding 0 .32rem
    height .64rem
    line-height .64rem
    color #ccc
    overflow hidden
    display flex
    align-items center
    flex-wrap nowrap
    input
      flex 1
      height .64rem
      min-width 2rem
      line-height .64rem
      padding-left .1rem
      padding-right .1rem
      height .64rem
      font-size 0.3rem
    .icon-search
      font-size .4rem
      flex none
</style>
