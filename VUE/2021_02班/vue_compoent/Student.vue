<template>
    <div>
        <h3>学生姓名：{{name}}</h3>
        <h3>学生年龄：{{age}}</h3>
    </div>
</template>

<script>
    export default {
        name:Student,
        data() {
           return {
            name:'桂嘉良',
            age:20
           }
        }
    }
</script>
