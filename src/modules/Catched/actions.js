import * as types from "./constants";

export const catchPokemon = id => ({
  type: types.CATCH_POKEMON,
  payload: { id }
});
