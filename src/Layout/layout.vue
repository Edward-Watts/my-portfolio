<template>
  <div class="layout">
    <NavBar />  
    <router-view />
  </div> 
</template>

<script>
import NavBar from "./Navigation/NavBar.vue"

export default {
    name: 'Layout',
    components: {
      NavBar
    }
}
</script>

<style scoped>
  
</style>