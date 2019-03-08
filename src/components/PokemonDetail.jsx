import React from 'react';
import { Link } from "react-router-dom";
import { useLastLocation } from 'react-router-last-location';

export const PokemonDetail = ({detail: {name, base_experience, height, weight}, id, countCachedPokemons}) => {
  const { pathname = '/pokemons/1' } = useLastLocation() || {};
  return (
    <div className="pokemon-detail">
    <Link to={{
  pathname,
  state: { countCachedPokemons }
 }}>Back to catalog</Link>
        <h2>#{id} {name}</h2>
        <p>Рост: {height}<br/>
          Вес: {weight}<br/>
          Базовый опыт за победу над ним: {base_experience}</p>
        <img src={`https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/${id}.png`} alt=""/>
    </div>
  )
};
