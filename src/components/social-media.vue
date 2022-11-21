<template>
  <div>
    <div class="d-flex justify-content-flex-start align-items-center mt-5">
        <b-link 
        href="https://www.linkedin.com/in/edward-watts-adjei/" target="blank">
        <div class="social" id="linkedin" v-b-tooltip.hover title="LinkedIn"></div></b-link>
        <b-link href="https://github.com/Edward-Watts" target="blank">
        <div class="social" id="github" v-b-tooltip.hover title="GitHub"></div></b-link>
        <b-link href="https://dribbble.com/Eddie_Watts" target="blank">
        <div class="social" id="dribbble" v-b-tooltip.hover title="Dribbble"></div></b-link>
        <b-link href="https://www.instagram.com/ui.eddie/" target="blank">
        <div class="social" id="instagram" v-b-tooltip.hover title="Instagram"></div></b-link>
    </div>  
  </div>  
</template>

<script>
export default {
    name: 'Social-Media',
    components: {

    },
    data () {
      return {
     
    }
  }  
}
</script>

<style scoped>
  .social {
    width: 35px;
    height: 35px;
    border-radius: 50px;
    text-align: center;
    margin-right: 6px;
    margin-left: 6px;
    opacity: 0.5;
    transition: 0.2s all ease;
  }
  .social:hover {
    opacity: 1;
    transition: 0.2s all ease;
  }
  #linkedin {
    background-image: url(../assets/social/linkedin.png);
    background-repeat: no-repeat;
    background-size: contain;
  }
  #github {
    background-image: url(../assets/social/github.png);
    background-repeat: no-repeat;
    background-size: contain;
  }
  #dribbble {
    background-image: url(../assets/social/dribbble.png);
    background-repeat: no-repeat;
    background-size: contain;
  }
  #instagram {
    background-image: url(../assets/social/instagram.png);
    background-repeat: no-repeat;
    background-size: contain;
  }
</style>
