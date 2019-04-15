/* eslint-disable */

export default {
  isActivityInCart(state) {
    return activity => {
      return state.activitiesInCart.some((act) => {
        return act.title === activity.title
      })    
    }
  },
  isActivityInFavorites(state) {
    return activity => {
      return state.activitiesInFavorites.some((act) => {
        return act.title === activity.title
      })    
    }
  },
}