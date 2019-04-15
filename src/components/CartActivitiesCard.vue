<template>
  <div class="cart-activities-card" >
    <img :src="activity.cover_image_url">         
    <h3>{{ activity.title }}</h3>   
    <p>{{ activity.retail_price.formatted_value }}</p>
  </div>
</template>

<script>
export default {
  props: {
    activity: Object,    
  },  
}
</script>