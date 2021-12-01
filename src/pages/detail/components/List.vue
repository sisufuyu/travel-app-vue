<template>
    <div class="list-wrapper">
        <div class="list-item" v-for="(item,index) in list" :key="index">
            <div class="list-title">{{item.title}}</div>
            <div class="list-children" v-if="item.children">
                <detail-list :list="item.children"></detail-list>
            </div>
            <div class="content-container" v-if="item.content">
                <div class="content-wrapper" v-for="(content,index) in item.content" :key="index">
                  <div class="content-title">{{content.title}}</div>
                  <div class="content-detail">
                    <div class="content-price"><span class="price-tag">￥</span><span class="price-num">{{content.price}}</span><span class="price-suffix">and up</span></div>
                    <div class="content-button">Details</div>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Detail from '../Detail.vue'
export default {
  components: { Detail },
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/common.styl';
@import '~styles/mixin.styl';
.list-wrapper
  background-color #fff
.list-item
  padding 0 .16rem .16rem
.list-title
  padding-top 16px
  font-size .4rem
  font-weight bold
  color #212121
  line-height .56rem
.list-children .list-title
  font-size .32rem
  line-height .44rem
  padding-top .28rem
  &:before
    content: ' '
    display: inline-block
    border-radius .06rem
    height .24rem
    width .08rem
    margin-right .12rem
    background-image linear-gradient(126deg, #00e0ca 0, #00bfd4 100%)
.content-container
  margin .32rem 0
  border-radius .16rem
  box-shadow 0 2px 6px rgba(0,0,0,0.1)
.content-wrapper
  padding .32rem .4rem .32rem .2rem
  display flex
  border-bottom 1px solid #eee
  align-items center
  .content-title
    font-size .3rem
    color $darkTextColor
    line-height .48rem
    flex 1
    line-clamp(3)
.content-detail
  display flex
  flex-direction column
  align-items flex-end
  .content-price
    color #ff8300;
    .price-num
      font-size .4rem
    .price-tage,.price-suffix
      font-size .24rem
  .content-button
    height .52rem
    line-height .52rem
    margin-top .12rem
    color #fff
    text-align center
    border-radius .3rem
    background-image linear-gradient(145deg,#ffab1e 0,#ff8c12 100%);
    width 1.6rem
</style>
