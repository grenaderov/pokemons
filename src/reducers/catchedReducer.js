export const catchedReducer = (state = {}, action) => {
  switch (action.type) {
      case 'CATCH_POKEMON':
          return {
              ...state,
              [action.payload.id]: action.payload.catched
          }
      default:
          return state;
  }
}