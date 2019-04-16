<template>
  <div>
    <h3>HomeContainer</h3>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for ="item in lunbotuList" :key='item.original'>
        <img :src="item.original" alt="">
      </mt-swipe-item>
    </mt-swipe>
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
      if( data.meta.status === 200) {
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

 img {
  width: 100%;
 }
</style>
