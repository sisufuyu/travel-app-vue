<template>
    <div class="search-wrapper">
        <div class="search-box-wrapper">
          <div class="search-box">
              <span class="iconfont icon-search"></span>
              <input placeholder="Where do you leave from?" class="search-input" v-model="keyword" @focus="handleInputFocus">
              <span class="iconfont icon-guanbixiao" v-show="keyword" @click="handleInputClear"></span>
          </div>
          <div class="search-cancel" :class="{'cancel-active': isActive}" @click="handleSearchCancel">Cancel</div>
        </div>
        <div class='search-mask' :class="{'mask-active': isActive}"></div>
        <div class="search-content" v-show="keyword" ref="search">
          <ul>
            <li class="search-item border-bottom" v-for="city in list" :key="city.id" @click="handleCityClick(city)">{{city.name}} - {{city.spell.slice(0, 1).toUpperCase() + city.spell.slice(1).toLowerCase()}}</li>
            <li class="search-item" v-show="hasNoneData">Can't find any city related</li>
          </ul>
        </div>
    </div>
</template>
<script>
import BetterScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null,
      isActive: false
    }
  },
  methods: {
    handleInputFocus () {
      this.isActive = true
    },
    handleSearchCancel () {
      this.isActive = false
      this.handleInputClear()
    },
    handleInputClear () {
      this.keyword = ''
    },
    handleCityClick (city) {
      city.spell = city.spell.slice(0, 1).toUpperCase() + city.spell.slice(1)
      this.$store.commit('departureChange', city)
      this.handleSearchCancel()
      this.$router.push('/')
    }
  },
  computed: {
    hasNoneData () {
      return this.list.length === 0
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      var word = this.keyword.toLowerCase().trim()
      if (word === '') {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let key in this.cities) {
          this.cities[key].forEach((value) => {
            let name = value.name
            let spell = value.spell
            if (name.indexOf(word) >= 0 || spell.indexOf(word) >= 0) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.bs = new BetterScroll(this.$refs.search, {
      mouseWheel: true,
      click: true
    })
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/common.styl'
.search-box-wrapper
  width 100%
  background-color #efeff4
  padding .26rem .2rem .2rem .2rem;
  box-sizing border-box
  position fixed
  top $headerHeight
  left 0
  z-index 999
  display flex
  flex-direction row
  align-items center
  .search-cancel
    margin-left .4rem
    display none
    &.cancel-active
      display block
  .search-box
    height .76rem
    background-color #fff
    border-radius 9999px
    position relative
    overflow hidden
    flex 1
    .icon-search
      display inline-block
      font-size .36rem
      position absolute
      left .2rem
      top .2rem
      z-index 3
      color $lightTextColor
    .icon-guanbixiao
      // display none
      font-size .36rem
      position absolute
      right .2rem
      top .2rem
      z-index 3
      color #ccc
      // &.clear-active
      //   display inline-block
    .search-input
      width 100%
      height .76rem
      line-height .76rem
      box-sizing border-box
      font-size .28rem
      position absolute
      left 0
      top 0
      padding-left .8rem
      padding-right .8rem
      color $lightTextColor
.search-mask
  position absolute
  top 2.1rem
  left 0
  right 0
  bottom 0
  background-color rgba(0,0,0,0.6)
  z-index 5
  display none
  &.mask-active
    display block
.search-content
  // display none
  overflow hidden
  position absolute
  top 2.1rem
  left 0
  right 0
  bottom 0
  background-color #fff
  z-index 10
  font-size .28rem
  border-top none
  // &.content-active
  //   display block
  .search-item
    line-height .62rem
    padding .1rem 0 .2rem .4rem
    background-color #fff
</style>
