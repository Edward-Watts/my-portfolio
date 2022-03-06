<template>
  <div>
    <div class="footer d-md-flex justify-content-flex-center align-items-center py-2">
        <small>Copyright  {{ date }}  Eddie Watts, All  Right  Reserved.</small>
    </div>
  </div>  
</template>

<script>
export default {
    name: 'Footer',
    components: {

    },
    data () {
      return {
     
    }
  },
  computed: {
      date () {
        return new Date().getFullYear()
      }
  }  
}
</script>

<style scoped>
  .footer {
    color: rgb(111, 117, 122)
  }
</style>