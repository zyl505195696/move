<template>
  <div>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for ="item in lunbotuList" :key='item.original'>
        <img class="lunbotu" :src="item.original" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格区域 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu1.png" alt="">
              <div class="mui-media-body"> 新闻咨询</div></a></li>
       <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu2.png" alt="">
              <!-- <span class="mui-badge">5</span></span> -->
              <div class="mui-media-body">图片分享</div></a></li>
       <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu3.png" alt="">
              <div class="mui-media-body">商品购买</div></a></li>
       <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu4.png" alt="">
              <div class="mui-media-body">留言反馈</div></a></li>
       <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu5.png" alt="">
              <div class="mui-media-body">视频专区</div></a></li>
       <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu6.png" alt="">
              <div class="mui-media-body">联系我们</div></a></li>

		</ul>
  </div>
</template>
<script>
// 弹框
import { Toast } from 'mint-ui'
import axios from 'axios'
export default {
  data () {
    return {
      lunbotuList: []
    }
  },
  created () {
    this.getLunbotu()
  },
  methods: {
    // 获取轮播图数据
    async getLunbotu () {
      const { data } = await axios({
        method: 'GET',
        // 这里直接请求的是 localhost:8080/data.json，服务器直接读取 json 文件并返回，测试使用
        url: 'http://localhost:8080/data.json'
      })
      if (data.meta.status === 200) {
        Toast ('加载成功')
        this.lunbotuList = data.data.list
      } else {
      Toast ('加载失败')
      }
    }
  },
  components: {

  }
}
</script>
<style scoped >
  .mint-swipe {
   height: 200px;
 }

 .lunbotu {
  width: 100%;
 }
 .mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: none;
 }
 ul li img{
   width: 60px;
   height: 60px;
 }
 .mui-media-body {
   font-size: 13px;
 }
</style>
