import {defineStore}  from "pinia";

export const useCountStore = defineStore('count', {
    actions: {
      // 加
      increment(value:number) {
          this.sum += value
      },
        // 减
        decrement(value:number) {
          this.sum -= value
        }
    },
    state() {
        return {
            sum: 88
        }
    },
    // 对state中的数据进行加工
    getters: {
            doubleSum: (state) => state.sum * 2
    }
})
