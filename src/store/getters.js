/* eslint-disable */

export default {
  isActivityInCart(state) {
    return activity => {
      return state.activitiesInCart.some((act) => {
        return act.title === activity.title
      })    
    }
  },
}