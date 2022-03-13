<template>
  <div class="nav-container">  
    <b-navbar class="py-0 px-2" toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#home" class="p-0 w-10">
        <img src="../../assets/logo/eddie-watts.png" style="width: 60px; margin-left:10px;" alt="Eddie-Codo">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav class="mr-2 justify-content-end">
        <b-navbar-nav>
          <b-nav-item class="mx-2" href="#home">Home</b-nav-item>
          <b-nav-item class="mx-2" href="#about">About</b-nav-item>
          <b-nav-item class="mx-2" href="#works">Works</b-nav-item>
          <b-nav-item class="mx-2" href="#contacts">Contacts</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>  
</template>

<script>
export default {
    name: 'NavBar',
    components: {

    },
    data () {
      return {
     
    }
  }  
}
</script>

<style scoped>
.nav-container {
  position: fixed;
  opacity: 98%; 
  top: 0; 
  width: 100%;
  z-index: 2;
}
</style>




