<template>
  <div class="news">
    <!-- 新闻的导航区 -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
          <RouterLink to="/news/detail">{{news.title}}</RouterLink>>
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
