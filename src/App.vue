<template>
  <div id="app">
    <div class="navigationBar"> 
      <p class="header3">Присяжний Олександр</p>
      <router-link to="/application" class="navigationLink">Резюме</router-link>
      <router-link to="/portfolio" class="navigationLink">Портфоліо</router-link>
    </div>
    
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
body{
  margin: 0;
  padding: 64px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.navigationBar {
  display: flex;
}
.header3 {
  margin: 0;
}
.navigationBar > p, a {
  margin-right: 48px;
  text-decoration: none;
}
</style>