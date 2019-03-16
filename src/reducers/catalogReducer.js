export const catalogReducer = (state = {}, action) => {
  switch (action.type) {
      case 'FETCH_POKEMON_SUCCESS':
          return {
              ...state,
              ...action.payload
          }
      default:
          return state;
  }
}