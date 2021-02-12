<template>
  <div class="mt-6 p-2">
    <h4 class="title is-4">User only content</h4>
    <button class="button is-link" @click="fetchContent">
      fetch content
    </button>
    <div class="content mt-3">
      <h3>{{content.title}}</h3>
      <p>{{content.content}}</p>
    </div>
  </div>
</template>

<script>  
import conn from '../connection'

export default {
  name: 'UserOnly',
  data(){
    return {
      content:{
        title: '',
        content: ''
      }
    }
  },
  methods: {
    fetchContent(){
      let token = localStorage.getItem('accesstoken') ? localStorage.getItem('accesstoken') : ''
      conn(token).get('/content')
      .then(res => {
        this.content.title = res.data.title
        this.content.content = res.data.content
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>  
