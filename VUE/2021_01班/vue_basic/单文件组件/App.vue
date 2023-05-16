// App.vue文件管理所有的子组件，在该文件中实现子组件的注册
<template>
    <!-- 使用组件标签 -->
    <div>
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
    // 1.导入子组件
    import School from './School'
    import Student from './Student'

    // 2.注册所有的子组件
    export default {
        name:'App',
        components:{
            School,
            Student
        }
    }
</script>

<style>

</style>