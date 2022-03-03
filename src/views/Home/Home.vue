<template>
  <div>
    <section id="home" class="section d-flex justify-content-center align-items-center">
      <div class="row mt-5">
        <div class="title">
          <div class="col-12">Hi, I'm <span style="color: #00e7e7;">Eddie Codo</span></div>
        </div>
        <div class="subtitle">
          <div class="col-12">Frontend Developer & UI/UX Designer</div>
        </div>
        <div class="col-12 d-flex justify-content-center align-items-center">
          <Social />
        </div>
        <div class="col-12 d-flex justify-content-center align-items-center mt-5">
          <b-btn 
          variant="outline-light" 
          href="path_to_file" 
          download="proposed_file_name" 
          pill 
          class="py-2 px-5">
            Download CV
          </b-btn>
        </div>
        <div class="col-12 d-flex justify-content-center align-items-center" style="margin-top: 10%;">
          <b-icon icon="chevron-double-down" animation="cylon-vertical" font-scale="2"></b-icon>
        </div>
      </div>
    </section>
    <section id="about" class="section d-flex align-items-center justify-content-center">
      <div class="row px-5">
        <div class="col-12 col-lg-6 d-flex align-items-center">
          <div class="reveal" >
            <div class="title-sec" style="color: #00e7e7;">who I am.</div>
            <div class="text">
              <p>
                As a design ethusiast my interest for web development began during and on completion of my first project  
                using just HTML and CSS. The entire experience was amazing and ever since I've strived to improve my skills and 
                knowledge of frontend programming.
              </p>
              <p>
                I've had the opportunity to meet and work with incredible people and interesting web technologies
                during my period of studies and projects development. I love what I do and I am constantly learning 
                new ways to get better.
              </p>
              <p>
                <b-link href="/about" style="text-decoration: none; color: #00e7e7">Get to know more</b-link>
              </p>
            </div>
            <Stack />
          </div>
        </div>
        <div class="col-12 col-lg-6 py-3">
          <img src="../../assets/background/web eddie.png" style="width: 100%;" alt="Eddie-Codo">
        </div>
      </div>
    </section>
    <section id="works" class="section d-flex align-items-center justify-content-flex-start">
      <div class="row px-5">
        <div class="col-12 col-lg-6">
          <div class="reveal">
            <div class="title-sec" style="color: #ff46a3;">What I do.</div>
            <div class="text"> 
              <p>
                Here are some presentation of my projects (design and actual code) to explore. Don't hesitate to send in your 
                <b-link href="/contacts" style="text-decoration: none; color: #ff46a3;">comments</b-link>. Interested to see more?
                Click <b-link href="/projects" style="text-decoration: none; color: #ff46a3;">here</b-link>.
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 mb-1" style="background: #2f112f; height: 300px">
        </div>
        <div class="col-12 mb-4" style="background: #2f112f; height: 300px">
        </div>
      </div>
    </section>
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
  import Stack from '../../components/stack.vue'
  import Social from '../../components/social-media.vue'

  export default {
    name: 'Home',
    components: {
      Stack,
      Social
    },
    data () {
      return {

      }
    },

    created () {
      window.addEventListener('scroll', this.onReveal)
    },
    destroyed () {
      window.removeEventListener('scroll', this.onReveal)
    }, 

    computed: {
    
    },

    methods: {
      onReveal () {
        let reveals = document.querySelectorAll(".reveal")

        for (let i = 0; i < reveals.length; i++) {
          const windowHeight = window.innerHeight;
          const elementTop = reveals[i].getBoundingClientRect().top;
          const elementVisible = 150;

          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      },
    }
  }
</script>

<style>
  .section {
    min-height: 100vh;
    display: block;
   
  }
  .title {
    position: relative;
    text-align: center;
    font-weight: 800;
    font-size: 5rem;
    margin-bottom: -25px;
  }

  .title-sec {
    position: relative;
    text-align: left;
    font-weight: 800;
    font-size: 4rem;
    margin-bottom: -15px;
  }

  .subtitle {
    position: relative;
    text-align: center;
    font-weight: 400;
    font-size: 2.5rem;
  }
  
  #home {
    background-image: url(../../assets/background/setup01.png);
    background-size: cover;
  }
  #about {
    background: #202020;
  }
  #works {
    background: #1a1a1a;
  }
  #lets-talk {
    background: #202020;
  }
  
.reveal{
  position: relative;
  transform: translateY(150px);
  opacity: 0;
  transition: 2s all ease;
}
.reveal.active{
  transform: translateY(0);
  opacity: 1;
}
</style>