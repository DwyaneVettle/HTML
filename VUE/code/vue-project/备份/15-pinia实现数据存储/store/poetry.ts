import { defineStore } from "pinia";

export const usePoetryStore = defineStore("poetry", {
    state() {
        return {
            poetryList:[
                {id:'001',content:'春江潮水连海平，海上明月共潮生。滟滟随波千万里，何处春江无月明？'},
                {id:'002',content:'人生如逆旅，我亦是行人'},
                {id:'003',content:'人生到处知何似，应似飞鸿踏雪泥'},
                {id:'004',content:'天生我材必有用，千金散尽还复来'}
            ]
        }
    }
})
