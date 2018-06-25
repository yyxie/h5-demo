<template>
  <div id="app">
    <router-link class="link" :to="{ path: '/'}">Home</router-link>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .link {
    border: 1px solid green;
    color:#333;
    line-height: 20px;

  }
</style>
