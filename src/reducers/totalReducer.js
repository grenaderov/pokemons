export const totalReducer = (state = {}, action) => {
  switch (action.type) {
      case 'ADD_TOTAL_PAGE':
          return action.payload;
      default:
          return state;
  }
}