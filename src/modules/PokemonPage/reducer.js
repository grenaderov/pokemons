import * as types from "./constants";

export const pokemonsDetail = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_POKEMON_DETAIL_START:
      return {
        ...state,
        [action.payload.pokemonId]: {
          id: action.payload.pokemonId,
          loading: true,
          error: null
        }
      };
    case types.ADD_POKEMON_DETAIL_SUCCESS:
      return {
        ...state,
        [action.payload.pokemonId]: {
          ...state[action.payload.pokemonId],
          loading: false,
          data: action.payload.pokemon
        }
      };
    case types.ADD_POKEMON_DETAIL_ERROR:
      return {
        ...state,
        [action.payload.pokemonId]: {
          ...state[action.payload.pokemonId],
          loading: false,
          error: action.payload.error
        }
      };
    default:
      return state;
  }
};
