<template>
  <div class="newsinfo-container">
   <h3 class="title">{{NewsInfo.title}}</h3>
   <p class="subtitle">
     <span>发表时间:{{NewsInfo.time }}</span>
     <span>点击:{{NewsInfo.click}}</span>
   </p>
   <hr>
   <div class="content">{{NewsInfo.zhaiyao}}</div>
  </div>
</template>

<script>
import axios from 'axios'
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      id:this.$route.params.id,
      NewsInfo:{}
    }
  },
  created () {
    this.getNewsInfo ()
  },
  methods: {
    async getNewsInfo () {
      const { data } = await axios({
        method: 'GET',
        url:'http://localhost:8080/data.json'
      })
      if ( data.meta.status === 200 ) {
        Toast ('新闻加载成功')
        let news = data.data.news;

          for( var i= 0; i < news.length; i++ ) {
            if ( news[i].id == this.id){
                this.NewsInfo = data.data.news[i]
            }

           }

      } else {
        Toast ('新闻加载失败')
      }
      console.log(this.NewsInfo)
    }
  },
  components: {

  }
}
</script>

<style scoped >
.newsinfo-container {
 padding: 0 4px;
}

.title {
  font-size: 16px;
  text-align: center;
  margin: 15px 0;
  color:red;
}
.subtitle {
  font-size: 13px;
  color: #226aff;
  display: flex;
  justify-content: space-between;

}
.content {

}
</style>
