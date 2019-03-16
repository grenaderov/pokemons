export const pokemonsDetail = (state = {}, action) => {
  switch (action.type) {
      case 'ADD_POKEMON_DETAIL':
          return {
              ...state,
              ...action.payload
          }
      default:
          return state;
  }
}