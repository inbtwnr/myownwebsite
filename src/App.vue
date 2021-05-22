<template>
  <div id="app">
    <div class="navigationBar"> 
      <h4>Присяжний Олександр</h4>
      <router-link to="/" class="navigationLink">Резюме</router-link>
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

<style lang='scss'>

</style>