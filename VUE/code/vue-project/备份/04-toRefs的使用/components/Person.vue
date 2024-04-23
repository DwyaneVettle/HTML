<template>
    <div class="person">
      <h3>姓名：{{name}}</h3>
      <h3>年龄：{{age}}</h3>
      <button @click="changeName">修改姓名</button>
      <button @click="changeAge">修改年龄</button>
    </div>
</template>


<script lang="ts" setup name="Person">
    import {reactive,toRefs} from 'vue'
    let person = reactive({
      name:'张三',
      age:18
    })
    // toRefs将reactive对象转换为普通对象，该普通对象的每个property都是一个ref
    // 这样就可以在模板中直接使用而不需要.value
    let {name,age} = toRefs(person)
    function changeName() {
      // name.value += '~'
      person.name += '~'
    }
    function changeAge() {
      // age.value += 1
      person.age += 1
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
</style>
