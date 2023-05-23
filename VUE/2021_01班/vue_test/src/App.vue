// App.vue文件管理所有的子组件，在该文件中实现子组件的注册
<template>
    <!-- 使用组件标签 -->
    <div>
        <Student name="张江淋" sex="男" age="21"/>
        <Student name="甘宇鹏" sex="男" age="18"/>
    </div>
</template>

<script>
    // 1.导入子组件
    import Student from './components/Student.vue'
    

    // 2.注册所有的子组件
    export default {
        name:'App',
        components:{
            Student,      
        },
        
    }
</script>

<style>

</style>