<template>
    <div class="header">
        <router-link to="/">
            <div class="header-back-home iconfont icon-arrow-left-bold"></div>
        </router-link>
        <h1>Choose your place of departure</h1>
    </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
@import '~styles/common.styl'
.header
  width 100%
  height $headerHeight
  line-height $headerHeight
  text-align center
  color #333
  background-color #fff
  position fixed
  top 0
  left 0
  z-index 999
  .header-back-home
    width $headerHeight
    height $headerHeight
    font-size 0.48rem
    color #333
    float left
  h1
    font-size .34rem
    white-space nowrap
    text-align center
    position absolute
    left 1.2rem
    right 1.2rem
</style>
