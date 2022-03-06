<template>
  <div>
    <div class="projects d-flex align-items-center justify-content-center">  
        <div class="row px-5">
            <div class="col-12 col-md-12 col-lg-6 d-flex align-items-center">
            
            </div>
            <div class="col-12 col-md-12 col-lg-6">
            <div class="stacks">
                <StackGallery />
            </div>
            </div>
        </div>
    </div>
    <div class="footer d-flex justify-content-center align-items-center">
        <Footer />
    </div>
  </div>
</template>

<script>
import StackGallery from '../../components/stack-gallery.vue'
import Footer from '../../components/footer.vue'

export default {
    name: 'Projects',
    components: {
      StackGallery,
      Footer
    },
    data () {
      return {
     
    }
  }  
}
</script>

<style scoped>
* {
    margin: 0
}
.projects {
    background: #202020;
    min-height: 100vh;
  }
  .title-sec {
    position: relative;
    text-align: left;
    font-weight: 800;
    font-size: 4rem;
    margin-bottom: -10px;
  }
</style>

