import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Page } from './components/Page';

// https://pokeapi.co/


// function RoutePage(props) {
//   return (
//     <Page
//       list={list}
//       pages={Math.floor(count / POKEMONS_PER_PAGE)}
//       match={props.match}
//       fetchPokemons={this.fetchPokemons}
//     />
//   );
// }

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Pokemons Catalog</h1>
          <Route
            path="/" 
            exact
            component={(props) => <div>HomePage</div>}
          />
          <Route
            path="/pokemons/:currentPage" 
            exact
            component={Page}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;


//  https://reacttraining.com/react-router/web/guides/quick-start
