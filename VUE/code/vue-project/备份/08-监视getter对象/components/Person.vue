<template>
    <div class="person">
      <h3>姓名：{{person.name}}</h3>
      <h3>年龄：{{ person.age }}</h3>
      <h3>汽车：{{ person.car.c1 }}、 {{ person.car.c2 }}</h3>
      <button @click="changeName">修改名字</button>
      <button @click="changeAge">修改年龄</button>
      <button @click="changeC1">修改汽车c1</button>
      <button @click="changeC2">修改汽车c2</button>
      <button @click="changeCar">修改汽车</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import {reactive,watch} from 'vue'

    let person = reactive({
      name:'Michealzou',
      age: 30,
      car: {
        c1:'奔驰',
        c2:'宝马'
      }
    })

    function changeName() {
      person.name += "~"
    }
    function changeAge() {
      person.age += 1
    }
    function changeC1() {
      person.car.c1 = "奥迪"
    }
    function changeC2() {
      person.car.c2 = "大众"
    }
    function changeCar() {
      person.car = {c1:'特斯拉',c2:'比亚迪'}
    }

    /*
    *  监视ref所定义的对象中的某个属性，且该属性是基本类型时，要写成函数式
    * */
    watch(() => person.name,(newVal,oldVal) =>{
      console.log('person.name变化了',newVal,oldVal)
    })
    /*
    *   监视响应式响应式对象中的某个属性，且该属性是对象类型时，可以直接写，也可以写函数
    *   但更推荐写函数，因为这样可以避免深度监视
    * */
    watch(() => person.car,(newVal,oldVal)=> {
      console.log('person.car变化了',newVal,oldVal)
    })
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>
