<template>
  <div class="cart-activities-card" >
    <img :src="activity.cover_image_url">         
    <h3>{{ activity.title }}</h3>   
    <p>{{ activity.retail_price.formatted_value }}</p>
    <i class="far fa-trash-alt" @click="handleDelete(activity)"></i>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex' 

export default {
  props: {
    activity: Object,      
  },  
  methods: {
    handleDelete(activity) {
      this.deleteActivity(activity)
    },
    ...mapActions([
      'deleteActivity'
    ]),
  }
}
</script>