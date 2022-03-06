<template>
  <div>
    <div class="stack-container d-flex justify-content-flex-start align-items-center" style="flex-wrap: wrap;">
        <div 
            class=""
            v-for="stack in stacks" :key="stack.name">
          <img :src="require('../assets/stacks/' + stack.logo)" class="stack" />
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
  }  
}
</script>

<style scoped>
.stack {
  height: 127px;
  width: 95px;
  margin-right: 15px;
  margin-bottom: 15px;
  color: rgb(24, 24, 24);
  border-radius: 10px;
}

</style>
