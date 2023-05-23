<template>
    <!-- template标签中需要跟标签包裹 -->
    <div class="demo">
        <h3>学校名称:{{name}}</h3>
        <h3>学校地址:{{addr}}</h3>
        <button @click="showName()">点我提示学校信息</button>
    </div>
</template>

<script>
     
    export default {
        name:'School',
        data() {
            return {
                name:'四川城市职业学院',
                addr:'四川成都'
            }
        },
        methods: {
            showName() {
                console.log(this.name);
            }
        },
        }
</script>

<style>
    .demo {
        background-color: red;
    }
</style>