import * as types from "./constants";

export const catalogReducer = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export const totalReducer = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_TOTAL_PAGE:
      return action.payload;
    default:
      return state;
  }
};
