<template>
    <div class="person">
      姓：<input v-model="firstName"> <br>
      名：<input v-model="lastName"> <br>
      全名：<span>{{fullName}}</span> <br>
    </div>
</template>

<script lang="ts" setup name="Person">
    import { ref, computed } from 'vue'
    const firstName = ref('Micheal')
    const lastName = ref('Zou')

    const fullName = computed({
      // getter
      get() {
        return firstName.value + ' ' + lastName.value
      },
      // setter
      set(newValue) {
        // 注意：我们这里使用的是解构赋值语法
        [firstName.value, lastName.value] = newValue.split(' ')
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
