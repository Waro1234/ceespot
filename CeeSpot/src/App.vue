<template>
  <div id="app">
    <navigation></navigation>
    <router-view/>
  </div>
</template>

<script>

import Navigation from '@/components/Navigation/Navigation' // Import the navigation into the base app
export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
