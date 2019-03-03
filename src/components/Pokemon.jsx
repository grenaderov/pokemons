import React from 'react';

export const Pokemon = ({id, name, catchPokemon, catched}) => {
  const className = !catched ? "pokemon" : "pokemon pokemon_catched";

  return (
    <div className={className} onClick={() => catchPokemon(id)}>
        <h2>#{id} {name}</h2>
        <img src={`https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/${id}.png`} />
    </div>
  )
};
