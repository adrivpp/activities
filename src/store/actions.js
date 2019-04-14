/* eslint-disable */
import axios from 'axios';

export default {
  getActivities: ({ commit, activities }) => {
    axios.get('https://api.musement.com/api/v3/venues/164/activities?limit=10&offset=1')
      .then((activities) => {
        activities = activities.data
        commit('setState', activities)
      })
      .catch(err => console.log(err));
  },
};