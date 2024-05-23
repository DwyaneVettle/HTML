<template>
  <!--  template中需要有一个跟标签包裹-->
  <div class="school">
    <h2>学校介绍</h2>
    <h3>学校的名字：{{ schoolName }}</h3>
    <h3>学校的地址：{{ addr }}</h3>
  </div>
</template>

<script>
  export default {
    name: 'School',
    data() {
    return {
      schoolName:"四川城市职业学院",
      addr:"四川省成都市",
    }
  }
  }
</script>

<style>
  .school {
    background-color: skyblue;
    border-radius: 10px;
    height: 300px;
    width: auto;
  }
</style>
