<template>
    <div class="person">
        <h3>一辆{{car.brand}}车，价值{{car.price}}万元</h3>
        <button @click="changePrice">加价10万</button>
        <button @click="changeBrand">修改品牌</button>
        <button @click="changeCar">修改汽车对象</button>

    </div>
</template>


<script lang="ts" setup name="Person">
    import {reactive,ref} from 'vue'
    let car = ref({
      brand:'奔驰',
      price:100
    })
    // 可以修改属性
    function changePrice() {
        car.value.price += 10
    }
    function changeBrand() {
      car.value.brand = '宝马'
    }
    // 修改整个对象不可行，必须借助Object.assign()整体替换
    function changeCar() {
      // 以下方法直接修改都不可行
      // car = {brand:'奥迪',price:50}
      // car = reactive({brand:'奥迪',price:50})

      // 必须借助Object.assign()整体替换来修改一个对象
      Object.assign(car,{brand:'BYD',price:50})
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
