<template>
  <div class="student">
    <h2>学生介绍</h2>
    <h3>学生的姓名：{{ studentName }}</h3>
    <h3>学生的性别：{{ gender }}</h3>
    <h3>学生的年龄：{{ age }}</h3>
    <button @click="addAge()">点我年龄+1</button>
  </div>
</template>

<script>
  export default {
    name: 'Student',
    data() {
      return {
        studentName:"张三",
        gender:'男',
        age:20
      }
    },
    methods: {
      addAge() {
        this.age += 1
      }
    }
  }
</script>

<style>
    .student {
      background-color: skyblue;
      border-radius: 10px;
      height: 300px;
      width: auto;
    }
</style>
