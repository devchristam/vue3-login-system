<template>
  <NavBar/>
  <template v-if="storePage === 'init'">
    <InitPage/>
  </template>
  <template v-else-if="storePage === 'login'">
    <LoginPage/>
  </template>
  <template v-else-if="storePage === 'register'">
    <RegisterPage/>
  </template>
  <template v-else>
    error
  </template>

</template>
  

<script>
import NavBar from './NavBar.vue'
import LoginPage from './LoginPage.vue'
import InitPage from './InitPage.vue'
import RegisterPage from './RegisterPage.vue'

export default {
  name: 'FrontPage',
  components: {
    NavBar,
    LoginPage,
    InitPage,
    RegisterPage,

  },
  computed: {
    storePage(){
      return this.$store.getters.getPage
    }
  }
}
</script>

<style>
</style>
