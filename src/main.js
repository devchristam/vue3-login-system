import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

// check login and name
let loginstate = localStorage.getItem('accesstoken') ? true : false
let loginname = loginstate ? JSON.parse(atob(localStorage.getItem('accesstoken').split('.')[1])).name : ''

const store = createStore({
    state(){
        return {
            page: 'init',
            login: loginstate,
            name: loginname
        }
    },
    mutations: {
        toPage(state, payload){
            state.page = payload.page
        },
        login(state){
            state.login = true
        },
        logout(state){
            state.login = false
        },
        setName(state, payload){
            state.name = payload.name
        },
    },
    getters: {
        getPage(state){
            return state.page
        },
        getLogin(state){
            return state.login
        },
        getName(state){
            return state.name
        }
    },
    actions: {
        changePage(context, payload){
            context.commit('toPage', payload)
        },
        login(context){
            context.commit('login')
        },
        logout(context){
            context.commit('logout')
        },
        changeName(context, payload){
            context.commit('setName', payload)
        },
    }
})

const app = createApp(App)
app.use(store)
app.mount('#app')
