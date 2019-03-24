import React from "react";
import { connect } from "react-redux";
import { PokemonDetail } from "./components/PokemonDetail";
import { addPokemonsDetail } from "./actions";
import { catchPokemon } from "../../modules/Catched/actions";

export class PokemonPage0 extends React.Component {
  componentDidMount() {
    const { match, handleAddPokemonsDetail } = this.props;
    const pokemonId = match.params.pokemonId;
    handleAddPokemonsDetail(pokemonId);
  }

  render() {
    const { pokemon, catched } = this.props;

    if (!pokemon || pokemon.loading) {
      return <div>Loading</div>;
    }

    return (
      <PokemonDetail
        id={pokemon.id}
        catched={catched[pokemon.id]}
        detail={pokemon.data}
        catchPokemon={this.props.handleCatchPokemon}
      />
    );
  }
}

const mapStateToProps = ({ catched, pokemons }, ownProps) => {
  const { pokemonId } = ownProps.match.params;
  return {
    pokemon: pokemons[pokemonId],
    catched
  };
};

const mapDispatchToProps = dispatch => ({
  handleCatchPokemon: id => dispatch(catchPokemon(id)),
  handleAddPokemonsDetail: pokemonId => dispatch(addPokemonsDetail(pokemonId))
});

export const PokemonPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonPage0);

// eslint
// prettier
// editorconfig
// stylelint

// https://github.com/reduxjs/redux-thunk
