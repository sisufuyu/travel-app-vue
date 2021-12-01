<template>
    <div>
        <detail-header :attractionName="attractionName"></detail-header>
        <detail-banner :bannerImg="bannerImg" :galleryImgs="galleryImgs"></detail-banner>
        <detail-content :content="content"></detail-content>
        <div>
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script>
import DetailHeader from './components/Header'
import DetailBanner from './components/Banner'
import DetailContent from './components/Content'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailHeader,
    DetailBanner,
    DetailContent,
    DetailList
  },
  data () {
    return {
      attractionName: '',
      bannerImg: '',
      galleryImgs: [],
      content: {},
      list: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      })
        .then(this.getDetailInfoSucc)
        .catch(function (error) {
          console.log(error)
        })
    },
    getDetailInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        var data = res.data
        this.attractionName = data.attractionName
        this.bannerImg = data.bannerImg
        this.galleryImgs = data.galleryImgs
        this.content = data.content
        this.list = data.list
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style>
</style>
