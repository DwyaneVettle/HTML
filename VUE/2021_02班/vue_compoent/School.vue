// 这是School组件,每一个.vue文件中有3个标签
<template>
    <!-- 该标签包含页面的结构-该标签写结构前必须有根标签包裹 -->
    <div class="demo">
       <h3>学校名称：{{name}}</h3> 
       <h3>学校地址：{{addr}}</h3> 
       <button @click="showName()">点我提示学校</button>
    </div>
</template>

<script>
// 该标签中编写交互动作
    export default {
        // 除el配置项之外，其他vm的配置项都可以在组件中使用
        name:School,
        data() {
            return {
                name:'四川城市职业学院',
                addr:'四川成都'
            }
        },
        methods: {
            showName() {
                alert(this.name)
            }
        }
    }
</script>

<style>
/* 该标签中书写页面样式-css */
    .demo {
       color:red
    }
</style>