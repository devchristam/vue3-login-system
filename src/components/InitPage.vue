<template>
  <div class="container is-max-desktop p-6">
    <h3 class="title is-3">Welcome</h3>
    <p class="my-2">
      This is a practice application for learning vue and vuex.
    </p> 
    <p class="my-2">
      For simplicity, the JWT in localStorage won't expire.
    </p>
    <template v-if="loginstate === true">
      <UserOnly/>
    </template>
  </div>
</template>


<script>
import UserOnly from './UserOnly.vue'
export default {
  name: 'InitPage',
  components: {
    UserOnly
  },
  computed: {
    loginstate(){
      return this.$store.getters.getLogin
    }
  }
}
</script>

<style>
</style>
