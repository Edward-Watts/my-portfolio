<template>
  <div class="app">
    <Layout />
  </div>
</template>

<script>
import Layout from "./Layout/layout.vue"

export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style scoped>
.app {
  font-family: "Raleway";
  color: white;
  position: relative;
}
</style>
