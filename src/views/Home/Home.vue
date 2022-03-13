<template>
  <div>
    <section id="home" class="section pt-5">
      <div class="row pt-5">
        <div class="title mt-5">
          <div class="col-12">Hi, I'm <span style="color: #0dcaf0;">Eddie Watts</span></div>
        </div>
        <div class="subtitle">
          <div class="col-12">Frontend Developer & UI/UX Designer</div>
        </div>
        <div class="col-12 d-flex justify-content-center align-items-center">
          <b-btn 
          variant="outline-info"
          href="#contacts"  
          pill 
          class="py-2 px-5 mt-5">
            Contact me!
          </b-btn>
        </div>
        <div class="col-12 d-flex justify-content-center align-items-center mt-2">
          <b-btn 
          variant="outline-light" 
          href="../../assets/resume/Edward-Watts-CV.pdf"
          target="blank"  
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
    <section id="about" class="section pt-5">
      <div class="row my-5 px-5">
        <div class="col-12 col-lg-6 d-flex align-items-center">
          <div class="reveal" >
            <div class="title-sec" style="color: #0dcaf0;">who I am.</div>
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
                Resourceful, a problem solver, collaborative and caring employee. I love music, movies and cooking. 
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
    <section id="works" class="section pt-5 align-items-center justify-content-flex-start">
      <div class="row mt-5 pt-3 px-5">
        <div class="col-12 col-lg-6">
          <div class="reveal">
            <div class="title-sec" style="color: #0dcaf0;">What I do.</div>
            <div class="text"> 
              <p>
                Here are some presentation of my projects (WebApps, UI Designs and Graphic Designs respectively) to explore. 
                Don't hesitate to send in your <b-link href="/contacts" style="text-decoration: none; color: #0dcaf0;">comments</b-link>. 
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row my-3 px-5">
        <div class="pic-container col-12 mt-3 d-flex justify-content-flex-start align-items-center" style="z-index: 1;">
          <div 
          class="pic webapp col-12 col-md-4 mx-3 d-flex justify-content-center align-items-center"
          @click="showWeb">
             
          </div>
          <div class="pic ui col-12 col-md-4 mx-3 d-flex justify-content-center align-items-center"
          @click="showUI">
             
          </div>
          <div class="pic flyer col-12 col-md-4 mx-3 d-flex justify-content-center align-items-center"
          @click="showFlyer">
             
          </div>
        </div>
      </div>

      <div v-if="show">
        <Works :data="data"/>
      </div> 

    </section>
    <section id="contacts" class="section pt-5">
      <div class="row my-1 px-5">
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
              <b-btn 
              variant="success" 
              href="mailto:eddiewattsadjei@gmail.com" 
              class="mt-3 py-2 px-5"
              pill>
                Send a message
              </b-btn>
              <Social />
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6 mt-4 mb-3" style="z-index: 1;">
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d3706.469339778247!2d-0.2510521066813808!3d5.677670979659226!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0xfdf9ef072d5fcdf%3A0xc2923be80cf3ba0b!2sKwabenya!3m2!1d5.6786107999999995!2d-0.2521888!5e0!3m2!1sen!2sgh!4v1645963274293!5m2!1sen!2sgh" 
          width="100%" 
          height="500px" 
          style="border-radius:0.25rem;" 
          allowfullscreen="" 
          loading="lazy">
          </iframe>
        </div>
      </div>
    </section>
    <div class="my-2 footer d-flex justify-content-center align-items-center">
    <Footer />
    </div>
  </div>
</template>

<script>
  import Stack from '../../components/stack.vue'
  import Social from '../../components/social-media.vue'
  import Footer from '../../components/footer.vue'
  import Works from '../../components/works.vue'
  import * as data from '../../utils/designs'

  export default {
    name: 'Home',
    components: {
      Stack,
      Social,
      Footer,
      Works
    },
    data () {
      return {
        data: null,
        webapp: null,
        ui: null,
        flyer: null,
        show: false,
        designs: {
          flyers: data.flyers,
          logos: data.logos
        }
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

      showFlyer () {
        this.show = true
        this.webapp = false
        this.ui = false
        this.flyer = true
        if (this.flyer) {
          this.data = this.designs
          console.log(this.data)
        }

      },
      showUI () {
        this.show = true
        this.webapp = false
        this.ui = true
        this.flyer = false

      },
      showWeb () {
        this.show = true
         this.webapp = true
        this.ui = false
        this.flyer = false
      }
    }
  }
</script>

<style scoped>
* {
    margin: 0;
  }
  p {
     margin-bottom: 10px;
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
  .section {
    display: block;
    min-height: 100vh;
  }
  .title {
    position: relative;
    text-align: center;
    font-weight: 800;
    font-size: 5rem;
    margin-bottom: -20px;
  }

  .title-sec {
    position: relative;
    text-align: left;
    font-weight: 800;
    font-size: 4rem;
    margin-bottom: -10px;
  }

  .subtitle {
    position: relative;
    text-align: center;
    font-weight: 400;
    font-size: 2.5rem;
  }

  .pic-container {
    overflow-x: scroll;
    background: #202020;
  }
  
  .pic {
    height:350px;
    width: 350px;
    border-radius: 10px;
    margin-bottom: 20px;
    text-align: center;
    opacity: 40%;
    cursor: pointer;
    transition: 0.4s all ease;
  }

  .pic:hover {
     opacity: 100%;
     transition: 0.4s all ease;
     background-size: 115%;
     background-position: center;
  }
  .pic:hover:before { 
    content: "View More";
    height: 100px;
    width: 100px;
    border-radius: 100px;
    background-color: #fff;
    color: #202020;
    text-align: center;
    box-sizing: border-box;
    padding: 25px;
  }

  .pics {
    width: 100%;

  }
  .webapp {
    background-image: url(../../assets/illustrations/budgety.png);
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
  }
  .ui {
    background-image: url(../../assets/illustrations/papa.png);
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
  }

  .flyer {
    background-image: url(../../assets/illustrations/reg-con.jpg);
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
  }

  #home {
    background-image: url(../../assets/background/setup01.png);
    background-size: cover;
  }
  #about {
    background: #202020;
  }
  #works {
    background: #202020;
  }
  #contacts {
    background: #202020;
  }
  .footer {
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