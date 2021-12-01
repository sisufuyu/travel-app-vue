<template>
    <div class="list-wrapper" ref="listWrapper">
        <div class="list">
            <div class="choose-city-tab"></div>
            <div class="choose-departure">
                <ul class="departure-list">
                    <li>
                        <p class="dest-list-title">Current location city</p>
                        <div class="dest-choose-hot">
                            <div class="current des-btn">
                              <span class="iconfont icon-dingweixiao"></span>
                              <span>{{this.curCity.spell}}</span>
                            </div>
                        </div>
                    </li>
                    <li class="alphabet-Hot">
                        <p class="dest-list-title">Popular departure city</p>
                        <div class="dest-choose-hot">
                          <div class="des-btn" :class="[city.id === currentId ? 'current' : '']" v-for="city in hotCities" :key="city.id" @click="handleCityClick(city)">{{city.name}} ({{city.spell.slice(0,1).toUpperCase() + city.spell.slice(1)}})</div>
                        </div>
                    </li>
                    <li class="alphabet" :class="['alphabet-'+letter]" v-for="(cityArr, letter) in cities" :key="letter">
                        <h4>{{letter}}</h4>
                        <div class="choose-list">
                            <ul>
                              <li class="choose-list-item" v-for="city in cityArr" :key="city.id" @click="handleCityClick(city)">{{city.name}} - {{city.spell.slice(0, 1).toUpperCase() + city.spell.slice(1)}}</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import BetterScroll from 'better-scroll'
import {mapState} from 'vuex'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  watch: {
    letter () {
      this.bs.scrollToElement('.alphabet-' + this.letter)
    }
  },
  computed: {
    currentId () {
      return this.$store.state.departureCity.id
    },
    ...mapState({
      curCity: 'departureCity'
    })
  },
  methods: {
    handleCityClick (city) {
      city.spell = city.spell.slice(0, 1).toUpperCase() + city.spell.slice(1)
      this.$store.commit('departureChange', city)
      this.$router.push('/')
    }
  },
  mounted () {
    this.bs = new BetterScroll(this.$refs.listWrapper, {
      mouseWheel: true,
      click: true
    })
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/common.styl'
@import '~styles/mixin.styl'
.list-wrapper
  overflow hidden
  position absolute
  top 2.1rem
  left 0
  right 0
  bottom 0
.choose-departure
  padding .2rem .6rem 0 .2rem
.dest-list-title
  font-size .28rem
  color #999
  margin-bottom .2rem
.dest-choose-hot
  overflow hidden
  .des-btn
    width 31%
    margin-right 3.3%
    margin-bottom .3rem
    ellipsis()
    float left
    height .68rem
    line-height .68rem
    text-align center
    border 1px solid #dbdbdb
    border-radius .06rem
    color #666
    box-sizing border-box
    font-size .24rem
    &:nth-child(3n)
      margin-right 0
    &.current
      border-color $lightThemeColor
      color $lightThemeColor
      .iconfont
        color $lightThemeColor
        margin-right .1rem
        font-size .24rem
.alphabet
  h4
    background-color #f5f5f5
    padding-left .2rem
    height .5rem
    line-height .5rem
    margin-bottom .2rem
    margin-left -.2rem
    color $darkTextColor
    font-weight 400
    font-size .24rem
  .choose-list-item
    font-size .28rem
    color $darkTextColor
    height .88rem
    line-height .88rem
    border-bottom 1px solid #f5f5f5
</style>
