import React from 'react';
import { Link } from "react-router-dom";

export const Pokemon = ({id, name, catchPokemon, catched }) => {
  const className = !catched ? "pokemon" : "pokemon pokemon_catched";

  return (
    <div className={className}>
      <Link to={`/pokemon/${id}`}>
        <h2>#{id} {name}</h2>
        <img src={`https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/${id}.png`} alt=""/>
      </Link>
      <button onClick={() => catchPokemon(id)}>Поймать</button> &nbsp;
      <button onClick={() => catchPokemon(id, false)}>Отпустить</button>
    </div>
  )
};
