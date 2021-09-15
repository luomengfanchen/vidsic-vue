import { createStore } from 'vuex'

export default createStore({
    state: {
        loginStatus: window.sessionStorage.getItem('token')
    },
    getters: {
        getLoginStatus: (state) => {
            return state.loginStatus
        }
    },
    mutations: {
        setLoginStatus: (state, status) => {
            state.loginStatus = status
        }
    },
    actions: {
        asyncLoginStatus: (context, status) => {
            context.commit('setLoginStatus', status)
        }
    }
})
