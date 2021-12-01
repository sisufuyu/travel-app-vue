<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-attractions :attractionList="attractionList"></home-attractions>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-travel :travelList="travelList"></home-travel>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeAttractions from './components/Attractions'
import HomeRecommend from './components/Recommend'
import HomeTravel from './components/Travel'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeAttractions,
    HomeRecommend,
    HomeTravel
  },
  data () {
    return {
      lastCityID: 0,
      swiperList: [],
      iconList: [],
      attractionList: [],
      recommendList: [],
      travelList: []
    }
  },
  computed: {
    ...mapState(['departureCity'])
  },
  methods: {
    getHomeinfo () {
      axios.get('/api/index.json?cityID=' + this.departureCity.id)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        let data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.attractionList = data.attractionList
        this.recommendList = data.recommendList
        this.travelList = data.travelList
      }
    }
  },
  mounted () {
    this.getHomeinfo()
    this.lastCityID = this.departureCity.id
  },
  activated () {
    if (this.lastCityID !== this.departureCity.id) {
      this.getHomeinfo()
      this.lastCityID = this.departureCity.id
    }
  }
}
</script>

<style>
</style>
