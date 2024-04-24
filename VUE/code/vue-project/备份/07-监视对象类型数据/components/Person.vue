<template>
    <div class="person">
        <h1>2.监视对象类型数据</h1>
        <h3>姓名：{{person.name}}</h3>
        <h3>年龄：{{person.age}}</h3>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改对象</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import {ref,watch} from 'vue'

    let person = ref({
      name:'Michealzou',
      age:30
    })
    function changeName() {
      person.value.name = 'Michealzou2'
    }
    function changeAge() {
      person.value.age = 35
    }
    function changePerson() {
      person.value = {
        name: 'Michealzou3',
        age: 36
      }
    }
    /*
      监视属性监视对象时若想监视内部属性的变化，需要深度监视
      1.Vue3中的watch默认不监测对象内部值的改变（一层）
      2.配置deep:true可以监测对象内部值改变（多层）
      备注：vue自身可以监测对象内部值的改变，但vue提供的watch默认不可以！
     */
    const stopWatch = watch(person,(newValue,oldValue)=>{
      console.log('person的值变化了',newValue,oldValue)
    },{deep:true})
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>
