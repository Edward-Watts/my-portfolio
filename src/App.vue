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
/* 
.app-image {
  min-height: 100vh;
  width: 100vw;
  background-image: url(./assets/background/gadget.png);
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 20%;
  position: absolute;
  top: 0;
} */

/* .app-gradient {
  background-image: linear-gradient(45deg, #111111, #1a1a1a, #222222); 
  animation: bg-animation 20s infinite alternate;
} */

/* /* @keyframes bg-animation {
  0% {
    background-position: right;
  }
  100% {
    background-position: left;
  }
} */

/* .app-layout {
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
} */
</style>
