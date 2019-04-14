<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Activities</router-link>  
      <div class="icons">
        <i class="fas fa-shopping-bag">
          <Badge :counter="cartCounter"/>
        </i>     
        <i class="fas fa-star"></i>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Badge from '@/components/Badge'

export default {
  name: 'app',
  data() {
    return {}
  },
  components: {
    Badge,    
  },  
  computed: {
    ...mapState([
      'cartCounter'
    ])
  }
};
</script>


