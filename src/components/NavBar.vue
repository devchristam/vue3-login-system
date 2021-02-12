<template>
  <nav class="navbar is-link">
    <div class="navbar-brand">
      <div class="navbar-item clickable" @click="goInit">
        Frontpage
      </div>
      <div class="navbar-burger" data-target="navbar-burger-menu" :class="{'is-active': isActive}" @click="toggleactive">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbar-menu" class="navbar-menu" :class="{'is-active': isActive}">
      <div class="navbar-end">
        <div class="navbar-item">

          <div class="mr-2" v-if="loginstate === true"> welcome! {{loginname}} </div>
          <div class="field buttons is-grouped">
            <template v-if="loginstate === false">
              <button class="button" @click="goReg">Register</button> 
              <button class="button" @click="goLogin">Login</button> 
            </template>
            <template v-else>
              <button class="button" @click="logout">Logout</button> 
            </template>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data(){
    return{
      isActive: false
    }
  },
  computed:{
    loginstate() {
      return this.$store.getters.getLogin
    },
    loginname(){
      return this.$store.getters.getName
    }
  },
  methods: {
    toggleactive(){
      this.isActive = !this.isActive      
    },
    goInit(){
      this.$store.dispatch('changePage',{
        page: 'init'
      })
    },
    goLogin(){
      this.$store.dispatch('changePage',{
        page: 'login'
      })
    },
    goReg(){
      this.$store.dispatch('changePage',{
        page: 'register'
      })
    },
    logout(){
      localStorage.removeItem('accesstoken')
      this.$store.dispatch('logout')
      this.$store.dispatch('changeName',{
        name: ''
      })
      alert('logout success')
    }
  }
}
</script>

<style>
  .clickable{
    cursor: pointer;
  }
</style>