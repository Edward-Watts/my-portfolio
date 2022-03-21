<template>
  <div>  
    <div class="py-2 text-center align-self-center">
      <p  class="title-sec">{{ heading }}</p>
      <div>
        <p>Please visit my 
          <b-link 
          :href="link"
          target="blank" 
          style="text-decoration: none; color: #0dcaf0;"> 
          {{ social }} 
          </b-link>
        page for more.
        </p>
      </div>
    </div>
    <div class="design-container px-4 d-flex justify-content-center align-items-center" style="flex-wrap: wrap;">
        <div 
            :class="designs"
            v-for="el in data" :key="el.name">
          <img :src="require('../assets/works/' + el.photo)"/>
          <b-link 
          v-if="webapp"
          :href="el.link"
          target="blank" 
          style="text-decoration: none; color: #0dcaf0;">{{ el.info }}</b-link>
        </div>
    </div> 
  </div>  
</template>

<script>
export default {
    name: 'Works',
    components: {

    },
    props: {
      data: Array,
      webapp: Boolean,
      ui: Boolean,
      flyer: Boolean
    },
    data () {
      return {

    }
  },
  mounted () {
     this.showToast()
    },
    computed: {
      heading () {
        if (this.flyer) {
          return 'Flyers & Logos'
        }
        if (this.ui) {
          return 'User Interface Design'
        }
         if (this.webapp) {
          return 'Web Applications'
        }
        return ''
      },
      social () {
        if (this.flyer) {
          return 'instagram'
        }
        if (this.ui) {
          return 'dribbble'
        }
         if (this.webapp) {
          return 'github'
        }
        return ''
      },
      link () {
        if (this.flyer) {
          return 'https://www.instagram.com/edwardwattsadjei/'
        }
        if (this.ui) {
          return 'https://dribbble.com/Eddie_Watts'
        }
         if (this.webapp) {
          return 'https://github.com/Edward-Watts'
        }
        return ''
      },
      designs () {
         if (this.webapp) {
          return 'designs-web'
        }
        return 'designs'
      }
      // info () {
      //    this.data.forEach((el) => {
      //       console.log(el.completed)
      //       this.completed.push(el.completed)
      //     })
      //   if (this.webapp || this.completed) {
      //     console.log(this.completed)
      //     return 'View on Netlify'
      //   } else if (this.webapp && !this.completed) {
      //     return 'Pending completion'
      //   }
      //   return null
      // }
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
    text-align: center;
    margin: 10px;
  }
  .designs-web {
    height:300px;
    width: 300px;
    text-align: center;
    margin: 10px 10px 30px 10px;
  }
</style>
