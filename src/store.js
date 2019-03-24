import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import { catchedReducer } from "./modules/Catched/reducer";
import { catalogReducer, totalReducer } from "./modules/CatalogPage/reducer";
import { pokemonsDetail } from "./modules/PokemonPage/reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  catched: catchedReducer,
  catalog: catalogReducer,
  totalPages: totalReducer,
  pokemons: pokemonsDetail
});

const initialStore = localStorage["state"]
  ? JSON.parse(localStorage["state"])
  : {};

export const store = createStore(
  reducer,
  initialStore,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  localStorage.setItem("state", JSON.stringify(store.getState()));
});
