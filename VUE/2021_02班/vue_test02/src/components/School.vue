<template>
    <div>
        <!-- 原生获取DOM，通过id/class -->
        <h3 id="demo">学校名称：{{ name }}</h3>
        <!-- vue实现获取DOM -->
        <h3 ref="demo02">学校名称：{{ name }}</h3>
        <h3>学校地址：{{ addr }}</h3>
        <button @click="showName()">点我提示学校名称</button>
        <button @click="showDom()">点我输出DOM</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name:'四川城市职业学院',
                addr:'四川成都'
            }
        },
        methods:{
            showName() {
                console.log(this.name);
            },
            showDom() {
                // 原生js获取DOM元素
                var h3 = document.getElementById("demo")
                console.log(h3.innerText);

                console.log(this.$refs.demo02.innerText);
            }
        }
    }
</script>