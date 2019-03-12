import { combineReducers } from 'redux';

const catchedReducer = (state = {}, action) => {
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

const catalogReducer = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_POKEMON_SUCCESS':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}


export const reducer = combineReducers({
    catched: catchedReducer,
    catalog: catalogReducer
})