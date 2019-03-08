import React from 'react';
import { PokemonDetail } from './PokemonDetail';

export class PageDetail extends React.Component {
  state = {
    pokemonDetail: {},
    loading: false,
    pokemonId: 0,
    countCachedPokemons: 0,
  }

  componentDidMount() {
    const { match } = this.props;
    const pokemonId = match.params.pokemonId;
    
    const { countCachedPokemons = 0 } = this.props.location.state;
    this.setState({ countCachedPokemons });

    // this.getPokemonDetail(1);
    // this.getPokemonDetail(2);
    // this.getPokemonDetail(3);
    this.getPokemonDetail(pokemonId);
  }

  getPokemonDetail = (pokemonId) => {
    let {pokemonDetail} = this.state;
    this.setState({ loading: true });
      if(pokemonDetail[pokemonId] !== undefined) {
        this.setState({ 
        loading: false, 
        pokemonDetail,
        pokemonId
        });
      } else {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
      fetch(url)
        .then(res => res.json())
        .then(({ id, name, base_experience, height, weight }) => {
          pokemonDetail = Object.assign(pokemonDetail, {[id]: {name, base_experience, height, weight}});
          this.setState({ 
            loading: false, 
            pokemonDetail,
            pokemonId
          });
          //  console.log(pokemonDetail);
        });
    }
  }

  render() {
    const {pokemonDetail, pokemonId, loading, countCachedPokemons} = this.state;
    return (
      <div>
        {(loading || pokemonDetail[pokemonId] === undefined)
            ? <div>Loading</div>
            : <PokemonDetail id={pokemonId} detail={pokemonDetail[pokemonId]} countCachedPokemons={countCachedPokemons}/>
        }
      </div>
    );
  }
}