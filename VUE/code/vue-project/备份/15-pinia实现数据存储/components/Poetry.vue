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
  import { ref } from 'vue'
  import axios from 'axios'
  import {nanoid} from 'nanoid'
  import { usePoetryStore } from "@/store/poetry";
  // 数据
  let poetryStore = usePoetryStore()

  // 方法
  async function getPoetry() {
    let result = await axios.get('https://v1.jinrishici.com/all')
    // console.log(result.data.content)
    poetryStore.poetryList.push({id:nanoid(),content:result.data.content})

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
