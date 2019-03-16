import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { catchedReducer } from './reducers/catchedReducer';
import { catalogReducer } from './reducers/catalogReducer';
import { totalReducer } from './reducers/totalReducer';
import { pokemonsDetail } from './reducers/pokemonsDetail';

const reducer = combineReducers({
    catched: catchedReducer,
    catalog: catalogReducer,
    totalPages: totalReducer,
    pokemons: pokemonsDetail
})

export const store = createStore(reducer, {});

store.subscribe(() => {
    console.log(store.getState());
});
