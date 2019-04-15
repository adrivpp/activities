/* eslint-disable */

<template>
  <button @click="handleClick" :disabled="isActivityInCart(activity)">
    {{ isActivityInCart(activity) ? 'In cart' : 'Add To cart' }}
  </button>    
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { constants } from 'crypto';

export default {
  name: 'addActivityButton',  
  props: {
    activity: Object
  },
  methods: {
    ...mapActions([
      'addActivity'
    ]),             
    handleClick() {
      this.addActivity(this.activity)      
    }
  },  
  computed: {
    ...mapGetters([
      'isActivityInCart'
    ]),    
  },
}
    

</script>
