import * as types from "./constants";

export const fetchPokemonsSuccess = fetchedPokemons => ({
  type: types.FETCH_POKEMON_SUCCESS,
  payload: fetchedPokemons
});

export const addTotal = total => ({
  type: types.ADD_TOTAL_PAGE,
  payload: total
});
