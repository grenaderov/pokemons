import * as types from "./constants";

export const catchedReducer = (state = {}, action) => {
  switch (action.type) {
    case types.CATCH_POKEMON:
      return {
        ...state,
        [action.payload.id]: !state[action.payload.id]
      };
    default:
      return state;
  }
};
