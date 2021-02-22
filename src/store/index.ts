import { createApp } from 'vue'
import { createStore } from 'vuex'

// Create a new store instance.
export interface State {
    count: number
}
export const store = createStore<State>({
    state () {
        return {
            count: 0
        }
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})



// Install the store instance as a plugin

