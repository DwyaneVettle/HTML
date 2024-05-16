import { defineStore } from "pinia";
import axios from "axios";
import {nanoid} from "nanoid";
import { reactive } from "vue";
// 对象式写法
/*export const usePoetryStore = defineStore("poetry", {
    actions: {
        async getPoetry() {
            let result = await axios.get('https://v1.jinrishici.com/all')
            // console.log(result.data.content)
            this.poetryList.push({id:nanoid(),content:result.data.content})
        }
    },
    state() {
        return {
            /!*poetryList:[
                {id:'001',content:'春江潮水连海平，海上明月共潮生。滟滟随波千万里，何处春江无月明？'},
                {id:'002',content:'人生如逆旅，我亦是行人'},
                {id:'003',content:'人生到处知何似，应似飞鸿踏雪泥'},
                {id:'004',content:'天生我材必有用，千金散尽还复来'}
            ]*!/
            poetryList:JSON.parse(localStorage.getItem('poetryList') as string) || []
        }
    }
})*/

// 组合式写法
export const usePoetryStore = defineStore("poetry", () => {
        // 数据
        let poetryList = reactive(
            JSON.parse(localStorage.getItem('poetryList') as string) || []
        )
        // 方法
        async function getPoetry() {
            let result = await axios.get('https://v1.jinrishici.com/all')
            // console.log(result.data.content)
            poetryList.push({id:nanoid(),content:result.data.content})
        }
        return {poetryList,getPoetry}
})
