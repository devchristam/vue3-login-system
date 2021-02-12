<template>
  <FrontPage/>
</template>

<script>
import FrontPage from './components/FrontPage.vue'

export default {
  name: 'App',
  components: {
    FrontPage
  }
}
</script>

<style>
  @import '../node_modules/bulma/css/bulma.min.css';
  @import '../node_modules/@fortawesome/fontawesome-free/css/fontawesome.css';
  @import '../node_modules/@fortawesome/fontawesome-free/css/solid.css';
  @import '../node_modules/@fortawesome/fontawesome-free/css/regular.css';
  @import '../node_modules/@fortawesome/fontawesome-free/css/brands.css';
</style>
