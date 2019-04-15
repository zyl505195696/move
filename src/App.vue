<template>
  <div id="app">
      <h1 class="top">这是根组件</h1>
      <!--  固定顶部 -->
      <mt-header fixed title="固定在顶部"></mt-header>
       <router-view/>
      <!-- 固定底部 -->
	    <nav class="mui-bar mui-bar-tab">
        <a class="mui-tab-item mui-active" href="#tabbar">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </a>
        <a class="mui-tab-item" href="#tabbar-with-chat">
          <span class="mui-icon mui-icon-contact mui-icon-icon-contact-filled"></span>
          <span class="mui-tab-label">会员</span>
        </a>
        <a class="mui-tab-item" href="#tabbar-with-contact">
          <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
            <span class="mui-badge">0</span>
          </span>
          <span class="mui-tab-label">购物车</span>
        </a>
        <a class="mui-tab-item" href="#tabbar-with-map">
          <span class="mui-icon mui-icon-search"></span>
          <span class="mui-tab-label">搜索</span>
        </a>
		  </nav>

  </div>
</template>

<style>
 .top{
   margin-top: 40px;
 }
</style>
