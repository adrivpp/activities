/* eslint-disable */

export default {
  setState: (state, activities) => {
    state.activities.push(activities);
  },
  addToCart: (state, activity) => {
    state.activitiesInCart.push(activity)    
  },
  removeFromCart: (state, activity) => {
    state.activitiesInCart = state.activitiesInCart.filter((act) => {
      return act !== activity
    })     
  },
  addToFavorites: (state, activity) => {
    state.activitiesInFavorites.push(activity)       
  },
  removeFromFavorites: (state, activity) => {
    state.activitiesInFavorites = state.activitiesInFavorites.filter((act) => {
      return act !== activity
    })         
  }
};
