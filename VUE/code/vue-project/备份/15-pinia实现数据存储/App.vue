<template>
  <div class="app">
    <Count class="count"/>
    <Poetry />
  </div>
</template>

<script lang="ts" setup name="App">
  import Count from './components/Count.vue'
  import Poetry from './components/Poetry.vue'
</script>

<style>
  .count {
    margin-bottom: 20px;
  }
</style>
