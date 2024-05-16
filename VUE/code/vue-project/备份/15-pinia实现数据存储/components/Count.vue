<template>
  <div class="count">
    <h3>当前求和为：{{ countStore.sum }}</h3>
    <!-- .value将收集的数据转为数字 -->
    <select v-model.number="option">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>
<script setup lang="ts" name="Count">
  import { ref } from 'vue'
  // 引入
  import { useCountStore} from "@/store/count";
  // 数据
  const countStore = useCountStore()
  // console.log(countStore.sum)

  let option = ref(1)  // 用户选择的数字
  // 方法
  function add() {
    countStore.sum += option.value
  }
  function minus() {
    countStore.sum -= option.value
  }
</script>
<style>
  .count {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
  select,button {
    margin-left: 5px;
    height: 25px;
  }
</style>
