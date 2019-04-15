<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Activities</router-link>  
      <div class="icons">
        <i class="fas fa-shopping-bag" @click="toggleShow">
          <Badge :counter="activitiesInCart.length"/>
        </i>     
        <i class="fas fa-star"></i>
      </div>
    </div>
    <div class="cart-elements-container" v-if="isCartShown && activitiesInCart.length">
      <CartActivitiesCard 
      v-for="(activity, index) in activitiesInCart"
      :activity="activity"
      :key="index"      
      />
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Badge from '@/components/Badge'
import CartActivitiesCard from '@/components/CartActivitiesCard'

export default {
  name: 'app',
  data() {
    return {
      isCartShown: false
    }
  },
  methods: {
    toggleShow() {      
      this.isCartShown = !this.isCartShown     
    }
  },
  components: {
    Badge,   
    CartActivitiesCard
  },  
  computed: {
    ...mapState([
      'activitiesInCart'
    ])
  }
};
</script>


