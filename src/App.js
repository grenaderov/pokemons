import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { LastLocationProvider } from "react-router-last-location";
import { Page } from './components/Page';
import { PageDetail } from './components/PageDetail';

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
        <LastLocationProvider>
         <div>
           <h1 className="text-center">Pokemons Catalog</h1>
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
            <Route
             path="/pokemon/:pokemonId" 
             exact
             component={PageDetail}
            />
          </div>
        </LastLocationProvider>
      </BrowserRouter>
    );
  }
}

export default App;


//  https://reacttraining.com/react-router/web/guides/quick-start
