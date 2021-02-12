<template>
  <div class="container is-max-desktop p-6">
    <h3 class="title is-3">Login</h3>
    <div class="field">
    <p class="control has-icons-left has-icons-right">
      <input class="input" type="name" placeholder="Name" v-model="name">
      <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
      </span>
      <span class="icon is-small is-right">
      </span>
    </p>
    </div>
    <div class="field">
    <p class="control has-icons-left">
      <input class="input" type="password" placeholder="Password" v-model="password">
      <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
      </span>
    </p>
    </div>
    <div class="field">
    <p class="control">
      <button class="button is-success" @click="login">
        Login
      </button>
    </p>
    </div>
  </div>

</template>

<script>
import conn from '../connection'

export default {
  name: 'LoginPage',
  data(){
    return{
      name: '',
      password: ''
    }
  },
  methods: {
    login(){
      let token = localStorage.getItem('accesstoken') ? localStorage.getItem('accesstoken') : ''
      conn(token).post('/account',{
        name: this.name,
        password: this.password
      })
      .then(res => {
        console.log(res.data)
        localStorage.setItem('accesstoken', res.data.accesstoken);
        this.$store.dispatch('login')
        this.$store.dispatch('changeName',{
          name: res.data.name
        })
        this.$store.dispatch('changePage',{
          page: 'init'
        })
        alert("login success")
      })
      .catch(err => {
        alert(`login error: ${err.response.data.error}`)
      })
    }
  }
}
</script>