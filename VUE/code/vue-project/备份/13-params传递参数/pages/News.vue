<template>
  <div class="news">
    <!-- 新闻的导航区 -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
          <!-- 第一种写法：模板字符串 -->
          <!--<RouterLink :to="`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`">{{news.title}}</RouterLink>>-->
          <!-- 第二种写法：对象写法 -->
          <RouterLink :to="{
            // path:'/news/detail', 不能用path，因为path是路径，而params是参数，必须使用命名路由
            name:'news-detail',
            params:{
              id:news.id,
              title:news.title,
              content:news.content
            }}">
            {{ news.title }}
          </RouterLink>
      </li>

    </ul>
    <!--  新闻展示区 -->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts" name="News">
  import { reactive } from 'vue'
  import { RouterView,RouterLink } from 'vue-router'
  const newsList = reactive([
    {id:'001',title:'四川',content:'天府之国'},
    {id:'002',title:'湖北',content:'就省通衢'},
    {id:'003',title:'江苏',content:'鱼米之乡'},
    {id:'004',title:'广东',content:'开放前沿'},
    {id:'005',title:'山东',content:'礼仪之乡'},
  ])

</script>

<style scoped>

</style>
