<template>
  <div>
      <section id="lets-talk" class="section d-flex justify-content-center align-items-center">
      <div class="row px-5">
        <div class="col-12 col-lg-6 d-block align-self-center">
          <div class="reveal">
            <div class="title-sec">let's talk!</div>
            <div class="text">
              <p>
                I'm Currently open to work and interested in a part-time, full-time and contract jobs
                in a remote or office conditions. However, if you have other request or question, feel
                free to put in the mail.
              </p>
              <p>
                I will love to hear from you!
              </p>
              <!-- <p>
                Call me: +233 (0) 54 662 0587
              </p> -->
              <b-btn variant="success" href="mailto:eddiewattsadjei@gmail.com" class="py-2 px-5">
                Send a message
              </b-btn>
              <Social />
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6 mt-4 mb-3">
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d3706.469339778247!2d-0.2510521066813808!3d5.677670979659226!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0xfdf9ef072d5fcdf%3A0xc2923be80cf3ba0b!2sKwabenya!3m2!1d5.6786107999999995!2d-0.2521888!5e0!3m2!1sen!2sgh!4v1645963274293!5m2!1sen!2sgh" 
          width="100%" 
          height="600px" 
          style="border-radius:0.25rem;" 
          allowfullscreen="" 
          loading="lazy">
          </iframe>
        </div>
      </div>
    </section>  
  </div>  
</template>

<script>
import Social from '../../components/social-media.vue'

export default {
    name: 'Contacts',
    components: {
        Social
    },
    data () {
      return {
     
    }
  }  
}
</script>

<style scoped>
 #lets-talk {
    background: rgb(24, 23, 23);
  }
.title-sec {
    position: relative;
    text-align: left;
    font-weight: 800;
    font-size: 4rem;
    margin-bottom: -15px;
  }
</style>
