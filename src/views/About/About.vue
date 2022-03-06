<template>
  <div>
    <div class="about d-flex align-items-center justify-content-center">  
      <div class="row px-5">
          <div class="col-12 col-md-12 col-lg-6 d-flex align-items-center mb-3">
            <div class="reveal" >
              <div class="title-sec" style="color: #00e7e7;">me.</div>
              <div class="text">
                <p>
                  I enjoy designing interactive User Interfaces (UI) that seek to enhance User Experience (UX) through my designs
                  and translating these designs into readable and elegant code.
                </p>
                <p>
                  Resourceful, a problem solver, collaborative and caring employee. I love music, movies and learning new things. 
                </p>
              </div>
            </div>
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
    name: 'About',
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
    margin: 0;
}
.about {
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




