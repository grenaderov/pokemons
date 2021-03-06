import React from "react";
import { connect } from "react-redux";
import { Pokemon } from "./components/Pokemon";
import { Link } from "react-router-dom";
import _ from "lodash";
import { catchPokemon } from "../../modules/Catched/actions";
import { fetchPokemonsSuccess, addTotal } from "./actions";
import { loadPokemonDetail } from "./api";

const POKEMONS_PER_PAGE = 12;

class Page0 extends React.Component {
  state = {
    loading: false
  };

  fetchPokemons = page => {
    const { catalog } = this.props;
    const offset = POKEMONS_PER_PAGE * (page - 1);
    const fetchingIds = _.range(offset + 1, offset + POKEMONS_PER_PAGE + 1);

    if (fetchingIds.every(id => catalog[id])) return;

    this.setState({ loading: true });

    setTimeout(
      () =>
        loadPokemonDetail(offset, POKEMONS_PER_PAGE)
          .then(data => {
            const fetchedPokemons = data.results.reduce((acc, pokemon) => {
              const id = pokemon.url.slice(34, -1);
              return { ...acc, [id]: { ...pokemon, id } };
            }, {});

            this.props.handleFetchPokemonsSuccess(fetchedPokemons);
            this.props.handleAddTotal(+data.count);

            this.setState({ loading: false });
          })
          .catch(err => this.props.handleFetchPokemonsFailure(err)),
      1000
    );
  };

  componentDidMount() {
    const { match } = this.props;

    const currentPage = +match.params.currentPage;
    this.fetchPokemons(currentPage);
  }

  componentDidUpdate(prevProps) {
    const { currentPage } = this.props.match.params;
    const { currentPage: prevCurrentPage } = prevProps.match.params;

    if (currentPage !== prevCurrentPage) {
      this.fetchPokemons(currentPage);
    }
  }

  render() {
    const { loading } = this.state;
    const { match, catalog, catched, totalPages } = this.props;
    const currentPage = +match.params.currentPage;
    const pages = Math.floor(totalPages / POKEMONS_PER_PAGE);

    const startId = POKEMONS_PER_PAGE * (currentPage - 1) + 1;
    const endId = startId + POKEMONS_PER_PAGE;
    const list = _.range(startId, endId).map(id => catalog[id]);

    return (
      <div>
        <p className="text-center">
          Catched Pokemons: {Object.values(catched).filter(Boolean).length}
        </p>
        <div className="wrapper">
          {loading ? (
            <div>Loading</div>
          ) : (
            list.map(
              pokemon =>
                pokemon && (
                  <Pokemon
                    key={pokemon.id}
                    name={pokemon.name}
                    id={pokemon.id}
                    catchPokemon={this.props.handleCatchPokemon}
                    catched={catched[pokemon.id]}
                  />
                )
            )
          )}
        </div>
        <div className="navigation">
          {currentPage > 1 && (
            <Link to={`/pokemons/${currentPage - 1}`}>← {currentPage - 1}</Link>
          )}
          <span>{currentPage}</span>
          {currentPage < pages && (
            <Link to={`/pokemons/${currentPage + 1}`}>{currentPage + 1} →</Link>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ catched, catalog, totalPages }) => ({
  catched,
  catalog,
  totalPages
});
const mapDispatchToProps = dispatch => ({
  handleCatchPokemon: (id, ...args) => dispatch(catchPokemon(id, ...args)),
  handleFetchPokemonsSuccess: pokemons =>
    dispatch(fetchPokemonsSuccess(pokemons)),
  handleAddTotal: total => dispatch(addTotal(total)),
  handleFetchPokemonsFailure: err => console.log("Error: " + err)
});

export const Page = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page0);
