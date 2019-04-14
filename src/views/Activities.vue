<template>
  <div class="activities-container">
    <p 
      v-for="(activity, index) in activities[0]"
      :key="index"
      >
      {{activity.about}}
    </p>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'activities',
  data() {
    return {}
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
