<template>
  <button id="favourites-button" @click="handleClick">
    <i 
    :class="[isActivityInFavorites(activity) ? 
    'fas fa-star' : 'fas fa-star unfilled']"
    ></i> 
  </button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'addToFavoritesButton',  
  props: {
    activity: Object
  },
  methods: {
    ...mapActions([
      'addToFavorites',
      'removeFromFavorites'
    ]),             
    handleClick() {
      this.isActivityInFavorites(this.activity) ?       
      this.removeFromFavorites(this.activity) :
      this.addToFavorites(this.activity) 
    }
  },  
  computed: {
    ...mapGetters([
      'isActivityInFavorites'
    ]),    
  },
}   

</script>