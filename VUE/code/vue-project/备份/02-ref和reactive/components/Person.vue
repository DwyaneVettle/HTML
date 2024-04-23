<template>
    <div class="person">
        <h3>一辆{{car.brand}}车，价值{{car.price}}万元</h3>
        <button @click="changePrice">加价10万</button>
        <hr>
        <ul>
          <li v-for="game in games" :key="game.id">{{game.name}}</li>
        </ul>
        <button @click="changeFirstGame">修改第一个游戏名字</button>
    </div>
</template>


<script lang="ts" setup name="Person">
    import {reactive,ref} from 'vue'
    let car = ref({
      brand:'奔驰',
      price:100
    })
    let games = reactive([
      {id:'001',name:'红色警戒'},
      {id:'002',name:'超级玛丽'},
      {id:'003',name:'忍者神龟'}
    ])
    console.log(car)
    console.log(games)
    function changePrice() {
        car.value.price += 10
    }
    function changeFirstGame() {
        games[0].name = '90坦克'
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
