<template>
	<div>
		<h2 @click="showName()">学校名称：{{name}}</h2>
		<h2>学生地址：{{addr}}</h2>
	</div>
</template>

<script>
	//import {mixin} from '../mixin.js'
	export default {
		name:'School',
		data() {
			console.log(this)
			return {
				name:'四川城市职业学院',
				addr:'四川成都'
			}
		},
		//mixins:[mixin]
	}
</script>