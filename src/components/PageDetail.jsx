import React from 'react';
import { connect } from 'react-redux';
import { PokemonDetail } from './PokemonDetail';
import { addPokemonsDetail } from '../actions/addPokemonsDetail';
import { catchPokemon } from '../actions/catched';

export class PageDetail0 extends React.Component {
  state = {
    loading: false
  }

  componentDidMount() {
    const { match } = this.props;
    const pokemonId = match.params.pokemonId;
    this.getPokemonDetail(pokemonId);
  }

  getPokemonDetail = (pokemonId) => {
    const { pokemons } = this.props;

    this.setState({ loading: true });
      if(pokemons[pokemonId] !== undefined) {
        this.setState({ loading: false });
        this.props.handleAddPokemonsDetail(pokemons);
      } else {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
        fetch(url)
          .then(res => res.json())
          .then(({ id, name, base_experience, height, weight }) => {
            const pokemonDetail = Object.assign(pokemons, {[id]: {name, base_experience, height, weight}});
            this.setState({ 
              loading: false
            });
            this.props.handleAddPokemonsDetail(pokemonDetail);
          });
    }
  }

  render() {
    const { loading } = this.state;
    const { pokemons, catched, match } = this.props;
    const pokemonId = match.params.pokemonId;

    return (
      <div>
        {(loading || pokemons[pokemonId] === undefined)
            ? <div>Loading</div>
            : <PokemonDetail id={pokemonId} catched={catched[pokemonId]} detail={pokemons[pokemonId]} catchPokemon={this.props.handleCatchPokemon}/>
        }
      </div>
    );
  }
}

const mapStateToProps = ({ catched, pokemons }) =>  ({ catched, pokemons });
const mapDispatchToProps = dispatch => ({
  handleCatchPokemon: (id, ...args) => dispatch(catchPokemon(id, ...args)),
  handleAddPokemonsDetail: (pokemons) => dispatch(addPokemonsDetail(pokemons))
});

export const PageDetail = connect(mapStateToProps, mapDispatchToProps)(PageDetail0);