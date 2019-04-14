<template>
  <button @click="handleClick" :disabled="isDisaled">
    {{ text }}
  </button>    
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'addActivityButton',
  data() {
    return {
      isInCart: false,
      text: 'Add to cart',
      isDisaled: false
    }
  }, 
  props: {
    activity: Object
  },
  methods: {
    ...mapActions([
      'addActivity'
    ]),
    checkActivitiesInCart() {
      this.isInCart = this.activitiesInCart.some((activity) => {
        return activity.title === this.activity.title
      })      
    },    
    handleClick() {
      this.addActivity(this.activity)
      this.checkActivitiesInCart()
      if (this.isInCart) {
        this.text = 'In cart',
        this.isDisaled = true
      }
    }
  },  
  computed: {
    ...mapState([
      'activitiesInCart'
    ]),    
  }
};
</script>
