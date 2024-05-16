<template>
  <div class="poetry">
      <button @click="getPoetry">获取一句诗句</button>
      <ul>
        <li v-for="poetry in poetryStore.poetryList" :key="poetry.id">
          {{ poetry.content }}
        </li>
      </ul>
  </div>
</template>
<script setup lang="ts" name="Poetry">
  import { usePoetryStore } from "@/store/poetry";
  import {storeToRefs} from "pinia";
  // 数据
  let poetryStore = usePoetryStore()
  let {poetryList} = storeToRefs(poetryStore)
  poetryStore.$subscribe((mutation, state) => {
    // console.log(poetryList,'mutation', mutation) // 监视了poetryList的变化
    // 变化后就可以做进一步的操作，如存储到localStorage
    localStorage.setItem('poetryList', JSON.stringify(poetryList.value))
  })
  // 方法
  function getPoetry() {
    poetryStore.getPoetry()
  }
</script>
<style>
.poetry {
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>
