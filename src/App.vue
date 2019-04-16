<template>
  <div id="app">
    <h1 class="top">这是根组件</h1>
      <!--  固定顶部 -->
    <mt-header fixed title="固定在顶部"></mt-header>
      <!-- 中间区域 路由入口 -->
    <router-view/>
      <!-- 固定底部 -->
	  <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact mui-icon-icon-contact-filled"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
		</nav>

  </div>
</template>

<style>
 .top{
   margin-top: 40px;
 }
</style>
