<template>
    <div class="person">
      <h3>当身高超过170，体重超过60就输出《身体非常棒》</h3>
      <p>身高：{{ height }}</p>
      <p>体重：{{ weight }}</p>
      <button @click="changeHeight">点我身高+10</button>
      <button @click="changeWeight">点我体重+10</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import {ref,watch,watchEffect} from 'vue'

    let height = ref(100)
    let weight = ref(40)

    function changeHeight() {
        height.value += 10
    }
    function changeWeight() {
      weight.value += 10
    }

    // 监视体重和身高
    /*watch([height,weight],() => {
      if(height .value > 170 || weight.value > 60) {
        console.log("身体非常棒")
      }
    })*/
    /*
    *   watchEffect()会自动监听，它会立即执行（相当于watch配置了{immetiate:true}）
    * */
    watchEffect(() => {
      if(height .value > 170 || weight.value > 60) {
        console.log("身体非常棒")
      }
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
