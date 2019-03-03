import React from 'react';
import {Pokemon} from './Pokemon';
import { Link } from "react-router-dom";
import _ from 'lodash';

const POKEMONS_PER_PAGE = 12;



export class Page extends React.Component {
  state = {
    pokemons: {},
    count: 100,
    loading: false,
  }

  fetchPokemons = (page) => {    
    const offset = POKEMONS_PER_PAGE * (page - 1);
    const fetchingIds = _.range(offset + 1, offset + POKEMONS_PER_PAGE + 1);
    const { pokemons } = this.state;

    if (fetchingIds.every(id => pokemons[id])) return;

    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${POKEMONS_PER_PAGE}`

    this.setState({ loading: true });

    setTimeout(() =>
      fetch(url)
        .then(res => res.json())
        .then(data => {
          const fetchedPokemons = data.results.reduce((acc, pokemon) => {
            const id = pokemon.url.slice(34, -1);
            return ({...acc, [id]: { ...pokemon, id }});
          }, {});

          this.setState(({pokemons}) => ({
            pokemons: { ...pokemons, ...fetchedPokemons },
            loading: false
          }))
        }),
      1000);
  }

  componentDidMount() {
    const { match } = this.props;
    const currentPage = +match.params.currentPage;

    this.fetchPokemons(currentPage);
  }

  componentDidUpdate(prevProps) {
    console.log('componentDidUpdate');
    const { currentPage } = this.props.match.params;
    const { currentPage: prevCurrentPage } = prevProps.match.params;

    if (currentPage !== prevCurrentPage) {
      this.fetchPokemons(currentPage);
    }
  }

  catchPokemon = (id) => {
    this.setState((prevState) => ({
      pokemons: {
        ...prevState.pokemons,
        [id]: {
          ...prevState.pokemons[id],
          catched: true
        }
      }
    }))
  }

  render() {
    const { count, loading, pokemons } = this.state;
    const { match } = this.props;

    const currentPage = +match.params.currentPage;
    const pages = Math.floor(count / POKEMONS_PER_PAGE);

    const startId = POKEMONS_PER_PAGE * (currentPage - 1) + 1;
    const endId = startId + POKEMONS_PER_PAGE;
    const list = _.range(startId, endId).map(id => pokemons[id]);
    console.log(_.range(startId, endId));
        
    return (
      <div>
        <div className="wrapper">
          {loading
            ? <div>Loading</div>
            : list.map(pokemon => pokemon && (
              <Pokemon
                key={pokemon.id}
                name={pokemon.name}
                id={pokemon.id}
                catchPokemon={this.catchPokemon}
                catched={pokemon.catched}
              />)
            )
          }
        </div>
        <div>
          {currentPage > 1 && <Link to={`/pokemons/${currentPage - 1}`}>← {currentPage - 1}</Link>}
          <span>{currentPage}</span>
          {currentPage < pages && <Link to={`/pokemons/${currentPage + 1}`}>{currentPage + 1} →</Link>}
        </div>
      </div>
    );
  }
}