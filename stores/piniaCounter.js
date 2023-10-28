import {defineStore} from 'pinia'
export const usePiniaCounterStore = defineStore({
    id: 'counter',
    state: () => ({
        counter: 0
    }),
    getters: {
        doubleCounter: (state) => {
            if (state?.counter % 2 === 0) return 'odd'
            else return 'even'
        }
    },
    actions: {
        increment() {
            this.counter++
        }
    }
})