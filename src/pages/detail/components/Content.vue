<template>
    <div class="content-wrapper">
        <div class="info-wrapper">
            <div class="info-title">{{content.title}}</div>
            <div class="info-detail">
                <div class="address"><span class="iconfont">&#xe600;</span><p class="text">{{content.address}}</p></div>
                <div class="phone"><span class="iconfont">&#xe88b;</span><p class="text">{{content.phone}}</p></div>
                <div class="hours"><span class="iconfont">&#xe8a9;</span><p class="text">{{content.hours}}</p></div>
                <div>
                    <div class="desc clearfix" @click="handleDescClick">
                        <span class="iconfont">&#xe627;</span>
                        <span class="text">More Info</span>
                        <span class="iconfont icon-arrow" :style="{transform: rotateArrow}">&#xe623;</span>
                    </div>
                    <div class="desc-detail" v-show="showDesc">{{content.desc}}</div>
                </div>
            </div>
        </div>
        <div class="interval"></div>
    </div>
</template>
<script>
export default {
  name: 'DetailContent',
  props: {
    content: Object
  },
  data () {
    return {
      showDesc: false,
      rotateArrow: 'rotate(0)'
    }
  },
  methods: {
    handleDescClick () {
      if (this.showDesc) {
        this.showDesc = false
        this.rotateArrow = 'rotate(0)'
      } else {
        this.showDesc = true
        this.rotateArrow = 'rotate(180deg)'
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/common.styl'
.content-wrapper
  position relative
  top -15px
  border-radius 15px 15px 0 0
  background-color #fff
  .info-wrapper
    padding .4rem .4rem 0
  .info-title
    line-height .56rem
    font-size .56rem
    font-weight bold
    padding-bottom .2rem
    border-bottom 1px solid #eee
  .info-detail
      & .iconfont
        color #bdbdbd
        display block
        font-size .28rem
        line-height .44rem
        float left
        margin-top .22rem
      & .text
        line-height .88rem
        font-size .28rem
        padding-left .4rem
  .address,.phone,.hours
    border-bottom 1px solid #eee
  .desc
    & .text
      padding-left .12rem
    & .icon-arrow
      display inline-block
      font-size .4rem
      width .4rem
      height .4rem
      color #bdbdbd
      float right
  .desc-detail
    padding .3rem 0
    line-height 1.5
    font-size 16px
    color #333
  .interval
    background-color #f5f5f5;
    height .1rem
</style>
