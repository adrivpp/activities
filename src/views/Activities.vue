<template>
  <div class="activities-container">
    <ActivitiesCard
    v-for="(activity, index) in activities[0]"
    :activity="activity"
    :key="index"
    />    
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ActivitiesCard from '@/components/ActivitiesCard'

export default {
  name: 'activities',
  data() {
    return {}
  },
  components: {
    ActivitiesCard,    
  },
  methods: {
    ...mapActions([
      'getActivities'
    ]),
  },
  mounted() {
    this.getActivities()
  },
  computed: {
    ...mapState([
      'activities'
    ])
  }
};
</script>
