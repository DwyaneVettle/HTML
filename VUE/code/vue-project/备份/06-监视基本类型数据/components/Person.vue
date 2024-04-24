<template>
    <div class="person">
        <h1>1.监视ref定义的基本类型数据</h1>
        <h3>当前sum值为：{{sum}}</h3>
        <button @click="addSum()">点我+1</button>
    </div>
</template>

<script lang="ts" setup name="Person">
   import {ref,watch} from 'vue'

   let sum = ref(0)
   function addSum() {
      sum.value += 1
   }

   /* 监视属性-watch
   *  监视两个值：newValue表示新的值，oldValue表示旧的值
   *  监视属性有一个返回值，返回值是一个函数，该函数会在监视的属性发生变化时调用
   *
   * */
   const stopWatch = watch(sum,(newValue,oldValue)=>{
      console.log('sum的值变化了',newValue,oldValue)
     //当值大于10时停止监视
     if(newValue > 10) {
       stopWatch()
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
