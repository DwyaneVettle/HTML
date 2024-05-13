<template>
    <div class="person">
      <ul>
        <li v-for="personObj in list" :key="personObj.id">
          {{ personObj.name }}-{{ personObj.age }}
        </li>
      </ul>
    </div>
</template>

<script lang="ts" setup name="Person">
    import {defineProps,withDefaults} from 'vue'
    import {Persons} from '@/types'

    // 接收父组件App传递过来的list
    // 这里定义的list，在模板中可以直接使用
    // defineProps(['list'])

    // 接收父组件APP传递过来的list并限制类型
    // defineProps<{list:Persons}>()

    // 接收list+限定类型+限定必要性(用?限定)+指定默认值(假定父组件没有传递list)
    withDefaults(defineProps<{list?:Persons}>(),{
      list:() => [{
        id: '007',
        name: '李坤',
        age: 30
      }]
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
