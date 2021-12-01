<template>
   <div class="nav">
        <ul>
            <!-- <li @click="handleLetterClick">Hot</li> -->
            <li class="nav-item" v-for="letter in alphabet" :key="letter" :ref="letter"
              @click="handleLetterClick"
              @touchstart="handleTouchStart"
              @touchmove="handleTouchMove"
              @touchend="handleTouchEnd"
            >
            <span class="small-letter">{{letter}}</span>
            <span class="big-letter">{{letter}}</span>
            </li>
            <!-- <li class="nav-item active-item">
              <span class="small-letter">Z</span>
              <span class="big-letter">Z</span>
            </li> -->
        </ul>
   </div>
</template>
<script>
export default{
  name: 'CityNav',
  props: {
    alphabet: Array
  },
  data () {
    return {
      touchStatus: false,
      timer: null
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('navChange', e.target.innerText)
    },
    handleTouchStart (e) {
      this.touchStatus = true
      this.activeNav(e)
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          this.clearActive()
          this.activeNav(e)
        }, 8)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
      this.clearActive()
    },
    clearActive () {
      for (let i = 0; i < this.alphabet.length; i++) {
        this.$refs[this.alphabet[i]][0].classList.remove('active-item')
      }
    },
    activeNav (e) {
      var clientY = e.changedTouches[0].clientY
      var index = Math.floor((clientY - 200) / 15)
      if (index >= 0 && index < this.alphabet.length) {
        this.$refs[this.alphabet[index]][0].classList.add('active-item')
        this.$emit('navChange', this.alphabet[index])
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/common.styl'
@import '~styles/mixin.styl'
.nav
  position absolute
  top 0
  right 0
  font-size .24rem
  line-height .28rem
  color $lightThemeColor
  width .6rem
  height 100%
  text-align center
  ul
    position fixed
    top 200px
    right 0
    .nav-item
      width: .6rem
      position relative
      user-select none
      &:first-child
        .small-letter
          width .6rem
    .small-letter
      display inline-block
      width .3rem
      height .3rem
      line-height .3rem
      text-align center
      border-radius .3rem
    .active-item
      .small-letter
        background-color $lightThemeColor
        color #fff
      .big-letter
        display inline-block
    .big-letter
      display none
      width 1rem
      height .8rem
      line-height .8rem
      text-align center
      font-size .4rem
      color #fff
      background-image url(https://pic.c-ctrip.com/platform/h5/component/common_citypicker2x@v8.0.png)
      background-repeat no-repeat
      background-size auto .8rem
      background-position -147px 0px
      position absolute
      left -1.2rem
      top -.25rem
</style>
