import Vue from 'vue';
import Router from 'vue-router';
import Activities from './views/Activities.vue';
import ActivityDetails from './views/ActivityDetails.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'activities',
      component: Activities,
    },
    {
      path: '/activities/:id',
      name: 'activityDetails',
      component: ActivityDetails,
    },
  ],
});
