<template>
  <div class="mt-3">
    <strong>Relevant Skills:</strong>
    <div class="d-flex mb-3" style="flex-wrap: wrap;">
        <div 
            class="stack px-4 py-2"
            @click="showStack(stack.name, stack.info)"
            v-for="stack in stacks" :key="stack.name">
            <strong>{{ stack.name}}</strong>
        </div>
    </div>  
  </div>  
</template>

<script>
import stacks from '../utils/sample-data'
export default {
    name: 'Stack',
    components: {
    
    },
    data () {
      return {
        stacks
    }
  },
  methods: {
      showStack (stack, info) {
          let message = ""
          switch (stack) {
            case 'React JS' : 
            message = info
            break;
            case 'Redux' : 
            message = info
            break;
            case 'Vue JS' : 
            message = info
            break;
            case 'Vuex' : 
            message = info
            break;
            case 'Easy Peasy' : 
            message = info
            break;
            case 'Javascript' : 
            message = info
            break;
            case 'Bootstrap Vue' : 
            message = info
            break;
            case 'Bootstrap' : 
            message = info
            break;
            case 'HTML5' : 
            message = info
            break;
            case 'CSS3' : 
            message = info
            break;
            case 'Sass' : 
            message = info
            break;
            default: null
            
          }
        this.$toast.info(message)
      }
  }  
}
</script>

<style scoped>
.stack {
  margin-right: 10px;
  margin-top: 10px;
  background: white;
  color: rgb(24, 24, 24);
  border-radius: 5px;
}
.stack:hover {
  background: #0dcaf0;
  transition: 0.4s all ease;
  cursor: pointer;
}
</style>
