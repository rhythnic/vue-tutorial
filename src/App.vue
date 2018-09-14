<template>
  <div id="app">
    <router-view/>
    <Feedback />
  </div>
</template>

<script>
import Feedback from './components/Feedback'

export default {
  components: { Feedback },
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
</style>
