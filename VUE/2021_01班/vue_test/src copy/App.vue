// App.vue文件管理所有的子组件，在该文件中实现子组件的注册
<template>
    <!-- 使用组件标签 -->
    <div>
        <!-- 原生js获取dom -->
        <h3 v-text="msg" id="title"></h3>
        <!-- vue获取dom元素-ref -->
        <h3 v-text="msg" ref="title"></h3>
        <School ref="school"></School>
        <button @click="showName()">点我输出h3Dom元素</button>
    </div>
</template>

<script>
    // 1.导入子组件
    import School from './components/School.vue'
    

    // 2.注册所有的子组件
    export default {
        name:'App',
        data() {
            return {msg:'欢迎来到四川城院'}
        },
        components:{
            School,      
        },
        methods:{
            showName() {
                // console.log(document.getElementById('title'));
                console.log(this.$refs.title);
                console.log(this.$refs.school);
            }
        }
    }
</script>

<style>

</style>