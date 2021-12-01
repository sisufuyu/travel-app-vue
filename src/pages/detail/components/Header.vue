<template>
    <div class="header" :class="{'show-bgc': showBgc}">
        <router-link to="/">
            <div class="header-back-home iconfont icon-arrow-left-bold"></div>
        </router-link>
        <h1>{{attractionName}}</h1>
    </div>
</template>
<script>
export default {
  name: 'DetailHeader',
  props: {
    attractionName: String
  },
  data () {
    return {
      showBgc: false
    }
  },
  methods: {
    handleScroll () {
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      if (scrollTop > 250) {
        this.showBgc = true
      } else {
        this.showBgc = false
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
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
  position fixed
  top 0
  left 0
  z-index 999
  .header-back-home
    width $headerHeight
    height $headerHeight
    font-size 0.48rem
    color #fff
    float left
  h1
    font-size .34rem
    white-space nowrap
    text-align center
    position absolute
    left 1.2rem
    right 1.2rem
    color #fff
.show-bgc
  background linear-gradient(to right,#10ebca,#16d4e5)
</style>
