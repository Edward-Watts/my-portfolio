<template>
  <div>  
    <div class="py-2 text-center align-self-center">
      <p  class="title-sec">Flyers & Logos</p>
      <div>
        <p>Please visit my 
          <b-link 
          href="https://www.instagram.com/edwardwattsadjei/"
          target="blank" 
          style="text-decoration: none; color: #0dcaf0;"> 
          instagram 
          </b-link>
        page for more.
        </p>
      </div>
    </div>
    <div class="design-container px-4 d-flex justify-content-center align-items-center" style="flex-wrap: wrap;">
        <div 
            class="designs mx-2"
            v-for="flyer in flyers" :key="flyer.name">
          <img :src="require('../../../assets/designs/flyers/' + flyer.photo)" />
        </div>
        <div 
            class="designs mx-2"
            v-for="logo in logos" :key="logo.name">
          <img :src="require('../../../assets/designs/logos/' + logo.photo)" />
        </div>
    </div> 
  </div>  
</template>

<script>
import * as data from '../../../utils/designs'
export default {
    name: 'Flyers',
    components: {

    },
    data () {
      return {
     flyers: data.flyers,
     logos: data.logos
    }
  },
  mounted () {
     this.showToast()
    },
    methods: {
      showToast () {
        this.$toast.info('Please scroll down')
      }
    } 
}
</script>

<style scoped>
.title-sec {
    position: relative;
    font-weight: 800;
    font-size: 4rem;
  }
  img {
    width: inherit;
    border-radius: 10px;
  }
  .designs {
    height:300px;
    width: 300px;
    margin-bottom: 20px;
    text-align: center;
    transition: 0.4s all ease;
  }
</style>
