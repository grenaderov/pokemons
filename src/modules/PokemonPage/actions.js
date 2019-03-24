import * as types from "./constants";
import { loadPokemon } from "./api";

export const addPokemonsDetailStart = pokemonId => ({
  type: types.ADD_POKEMON_DETAIL_START,
  payload: { pokemonId }
});

export const addPokemonsDetailSuccess = (pokemonId, pokemon) => ({
  type: types.ADD_POKEMON_DETAIL_SUCCESS,
  payload: { pokemonId, pokemon }
});

export const addPokemonsDetailFailure = (pokemonId, error) => ({
  type: types.ADD_POKEMON_DETAIL_ERROR,
  payload: { pokemonId, error }
});

export const addPokemonsDetail = pokemonId => (dispatch, getState) => {
  const state = getState();
  if (pokemonId in state.pokemons) return;

  dispatch(addPokemonsDetailStart(pokemonId));
  loadPokemon(pokemonId)
    .then(({ id, name, base_experience, height, weight }) => {
      dispatch(
        addPokemonsDetailSuccess(pokemonId, {
          name,
          base_experience,
          height,
          weight
        })
      );
    })
    .catch(err => dispatch(addPokemonsDetailFailure(pokemonId, err)));
};
