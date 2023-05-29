<template>
  <div>
    <Student/>
    <School ref="sch"/>
    <button @click="showCom()">点我获取组件</button>
  </div>
</template>

<script>
import Student from './components/Student.vue'
import School from './components/School.vue'

export default {
  name: 'App',
  components: {
    Student,
    School
  },
  methods:{
    showCom() {
      console.log(this.$refs.sch);
    }
  }
}
</script>