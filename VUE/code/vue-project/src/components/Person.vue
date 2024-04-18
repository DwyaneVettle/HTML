<template>
    <div class="person">
        <h3>姓名：{{name}}</h3>
        <h3>年龄：{{age}}</h3>
        <button @click="changeName">点击修改名字</button>
        <button @click="changeAge">点击修改年龄</button>
        <button @click="showTel()">查看联系电话</button>
    </div>
</template>

<!--<script lang="ts">-->
<!--    export default {-->
<!--        name:"Person",-->
        // setup() {
        //   console.log(this)  // Vue3中的this是undefined
        //   let name="张三"
        //   let age=18
        //   let tel='15880000000'
        //   function changeName() {
        //     name = "李四"
        //   }
        //   function changeAge () {
        //     age += 1
        //   }
        //   function showTel() {
        //     alert(tel)
        //   }
        //   return {
        //     name,age,tel,changeName,changeAge,showTel
        //   }
        // }
<!--    }-->
<!--</script>-->
<script lang="ts" setup name="Person">
    let name="张三"
    let age=18
    let tel='15880000000'
    function changeName() {
      name = "李四"
    }
    function changeAge () {
      age += 1
    }
    function showTel() {
      alert(tel)
    }
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    button {
      margin: 0 3px
    }
</style>>
