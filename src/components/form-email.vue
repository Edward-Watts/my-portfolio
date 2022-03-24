<template>
    <div>
        <ValidationObserver ref="messageValidation">
          <b-form  @submit.prevent>
            <!-- <b-alert :show="show" :variant="variant">{{ alert }}</b-alert> -->
              <b-form-input 
              v-model="name" 
              id="name" 
              placeholder="Name">
              </b-form-input>

            <ValidationProvider
            name="email" 
            rules="required" 
            v-slot="{ errors }">
              <b-form-input 
              class="mt-2" 
              v-model="email" 
              type="email" 
              id="email" 
              placeholder="Email">
              </b-form-input>
              <small class="text-danger">{{ errors[0] }}</small>
            </ValidationProvider>

            <ValidationProvider 
            name="message"
            rules="required" 
            v-slot="{ errors }">
              <b-form-textarea 
              class="mt-2" 
              v-model="message" 
              id="message" 
              placeholder="Message" 
              rows="6">
              </b-form-textarea>
              <small class="text-danger">{{ errors[0] }}</small>
            </ValidationProvider>

          </b-form>
        </ValidationObserver>
          <b-button 
            class="mt-4 mb-3 float-end py-2 px-5" 
            type="submit" 
            variant="outline-success"
            @click="handleSubmit">
            Send
          </b-button>
    </div>
</template>

<script>
import { ValidationProvider,ValidationObserver, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'Your {_field_} is required'
  });

export default {
    name: 'Form-Email',
    components: {
      ValidationProvider,
      ValidationObserver
    },
    data () {
      return {
        visitors: [],
        name: null,
        email: null,
        message: null,
        show: false,
        variant: null,
        alert: null
      }
    },
    handleSubmit() {
        this.$refs.messageValidation.validate().then((success) => {
          if (success) {
            const newVisitor= {
          name: this.name,
          email: this.email,
          message: this.message
        }
        const visitorsArr = this.visitors.push(newVisitor)
          if (newVisitor?.email && newVisitor?.message) {
            this.$toast.success('Message sent successfully')
            // this.show = true
            // this.variant = 'success'
            // this.alert = 'Message sent successfully'
            }
          } else {
            this.$toast.error('Please fill required fields')
              // this.show = true
              // this.variant = 'danger'
              // this.alert = 'Please fill required fields'
          }
        })
    },
}
</script>

<style scoped>

</style>