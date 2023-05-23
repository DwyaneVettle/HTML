<template>
    <!-- template标签中需要跟标签包裹 -->
    <div>
        <h3>{{msg}}</h3>
        <h3>学生姓名:{{name}}</h3>
        <h3>学生年龄:{{age+1}}</h3>
        <h3>性别：{{sex}}</h3>
    </div>
</template>

<script>
     
    export default {
        name:'Student',
        data() {
            return {
               msg:'学生信息',
            }
        },
        /* props:可以将组件的模板进行复用 */
        // 1.传统/简单生命方式
        props:['sex','age','name']
        // 2.接收并限制数据类型
       /*  props:{
            name:String,
            sex:String,
            age:Number
        } */
        //3. 接收并限制数据类型+必要性限制
        /* props:{
            name:{
                type:String,
                required:true
            },
            age:{
                type:Number,
                default:99
            },
            sex:{
                type:String,
                required:true
            }
        } */
       
        }
</script>