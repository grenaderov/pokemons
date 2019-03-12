export const catchPokemon = (id, catched = true) => ({
    type: 'CATCH_POKEMON',
    payload: {
        id,
        catched
    }
});
