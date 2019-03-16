import React from 'react';
import { Link } from "react-router-dom";

export const PokemonDetail = ({detail: {name, base_experience, height, weight}, id, catchPokemon, catched}) => {
  const className = !catched ? "pokemon" : "pokemon pokemon_catched";
  
  return (
    <div className="pokemon-detail">
    <Link to={`/pokemons/1`}>Back to catalog</Link>
        <h2>#{id} {name}</h2>
        <button onClick={() => catchPokemon(id)}>Поймать</button> &nbsp;
        <button onClick={() => catchPokemon(id, false)}>Отпустить</button>
        <p>Рост: {height}<br/>
          Вес: {weight}<br/>
          Базовый опыт за победу над ним: {base_experience}</p>
        <img className={className} src={`https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/${id}.png`} alt=""/>
    </div>
  )
};
