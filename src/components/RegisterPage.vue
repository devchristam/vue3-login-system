<template>
  <div class="container is-max-desktop p-6">
    <h3 class="title is-3">Register</h3>
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
      <button class="button is-success" @click="register">
        Register
      </button>
    </p>
    </div>
  </div>

</template>

<script>
import conn from '../connection'

export default {
  name: 'RegisterPage',
  data(){
    return{
      name: '',
      password: ''
    }
  },
  methods: {
    register(){
      let token = localStorage.getItem('accesstoken') ? localStorage.getItem('accesstoken') : ''
      conn(token).put('/account',{
        name: this.name,
        password: this.password
      })
      .then(res => {
        console.log(res.data)
        alert("register success")
      })
      .catch(err => {
        alert(`register error: ${err.response.data.error}`)
      })

    }
  }
}
</script>

<style>
</style>
