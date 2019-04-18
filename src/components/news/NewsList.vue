<template>
  <div>

    <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src="item.url">
						<div class="mui-media-body">
							<h2>{{ item.title }}</h2>
							<p class='mui-ellipsis'>
                <span>发布时间:{{ item.time | dataFormat('YYYY-MM-DD')}}</span>
                <span>点击{{ item.click }}次</span>
              </p>
						</div>
					</a>
				</li>

			</ul>
  </div>
</template>

<script>
import axios from 'axios'
import { Toast } from 'mint-ui'
export default {  // 获取新闻列表
  data () {
    return {
      newsList:[]
    }
  },
  created () {
    this.getNewsList ()
  },
  methods: {
    async getNewsList () {
      const { data } = await axios({
        method: 'GET',
        url:'http://localhost:8080/data.json'
      })
      if( data.meta.status === 200 ) {
        Toast('加载新闻列表成功')

        this.newsList=data.data.news
       console.log(this.newsList)

      }else{
        Toast('加载新闻列表失败')
      }

    }
  },
  components: {

  }
}
</script>

<style scoped >
.mui-table-view li h2 {
  font-size: 14px;
}
.mui-ellipsis {
  font-size: 12px;
  color: #226aff;
  display: flex;
  justify-content:space-between;
}
</style>
