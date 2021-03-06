import { createStore } from 'vuex'

export default createStore({
    state: {
        loginStatus: window.sessionStorage.getItem('token'),
        userAvator: window.sessionStorage.getItem('avator'),
        // 在开发环境中设值为：'http://127.0.0.1:8081'， 生产环境中为''
        baseURL: 'http://127.0.0.1:8081'
    },
    getters: {
        getLoginStatus: (state) => {
            return state.loginStatus
        },
        getAvator: (state) => {
            return state.userAvator
        },
        getbaseURL: (state) => {
            return state.baseURL
        }
    },
    mutations: {
        setLoginStatus: (state, status) => {
            state.loginStatus = status
        },
        setAvator: (state, url) => {
            state.userAvator = url
        }
    },
    actions: {
        asyncLoginStatus: (context, status) => {
            context.commit('setLoginStatus', status)
        },
        asyncAvator: (context, url) => {
            context.commit('setAvator', url)
        }
    }
})
