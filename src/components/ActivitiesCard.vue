<template>
  <div class="activities-card-component">    
    <img :src="activity.cover_image_url">
    <div class="activities-info">    
      <AddToFavoritesButton :activity="activity"/> 
      <h3>{{ activity.title }}</h3>    
      <p>{{ activity.description }}</p>
      <p>{{ activity.retail_price.formatted_value }}</p>
      <AddActivityButton 
      :activity="activity"
      />
    </div>
  </div>
</template>

<script>
import AddActivityButton from '@/components/AddActivityButton'
import AddToFavoritesButton from '@/components/AddToFavoritesButton'

export default {
  props: {
    activity: Object
  },
  components: {
    AddActivityButton,
    AddToFavoritesButton
  }
}
</script>