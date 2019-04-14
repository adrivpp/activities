<template>
  <div class="activities-card-component">    
    <img :src="activity.cover_image_url">
    <div class="activities-info">     
      <h3>{{ activity.title }}</h3>    
      <p>{{ activity.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activity: Object
  }
}
</script>