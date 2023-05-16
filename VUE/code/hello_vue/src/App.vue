<template>
	<div>
		<!-- 原生用法 -->
		<h2 v-text="msg" id="title"></h2>
		<!-- Vue用法ref属性 -->
		<h2 v-text="msg" ref="title"></h2>
		<button @click="showDOM()" >点我输出上方DOMton</button>
		<School ref="sch"></School>
	</div>
</template>

<script>
	//引入组件
	import School from './components/School.vue'

	export default {
		name:'App',
		components:{School},
		data() {
			return {
				msg:"欢迎学习"
			}
		},
		methods:{
			showDOM() {
				// 原生用法
				// console.log(document.getElementById('title'));
				// Vue用法
				console.log(this.$refs.title);
				// 组件添加ref属性是vc实例对象
				console.log(this.$refs.sch);
			}
		}
	}
</script>
