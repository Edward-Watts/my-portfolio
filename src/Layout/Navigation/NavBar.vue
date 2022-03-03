<template>
  <div class="nav-container">  
    <b-navbar class="p-0" toggleable type="dark" variant="dark">
      <b-navbar-brand href="/home" class="p-0 w-10">
        <img src="../../assets/logo/transparent-logo.png" style="width: 60px;" alt="Eddie-Codo">
        Eddie Codo
      </b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse" style="margin-right: 10px;">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <!-- Right aligned nav items -->
          <b-navbar-nav class="align-items-center">
            <b-nav-item class="mb-2" href="/home" active>Home</b-nav-item>
            <b-nav-item class="mb-2" href="/about">About</b-nav-item>
            <b-nav-item class="mb-2" href="/projects">Projects</b-nav-item>
            <b-nav-item class="mb-2" href="/contacts">Contacts</b-nav-item>
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




