import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { Page } from "./modules/CatalogPage/Page";
import { PokemonPage } from "./modules/PokemonPage/PokemonPage";
import { store } from "./store";

// https://pokeapi.co/

// git add .
// git commit -m 'commit message'

// git commit -am 'commit message'

// Каталог
// кол-во покемонов на странице (селект)
// вывод этих покемонов
// ссылки на каждого покемона, кнопка поймать

// Страница покемона
// поймать
// информация

// State
// count pages
// loading
// catalog: { [id]: { ... } } // list
// pokemons: { [id]: { ... } } // details
// catched : { [id]: true }

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <h1 className="text-center">Pokemons Catalog</h1>
            <Route path="/" exact component={props => <div>HomePage</div>} />
            <Route path="/pokemons/:currentPage" exact component={Page} />
            <Route path="/pokemon/:pokemonId" exact component={PokemonPage} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

//  https://reacttraining.com/react-router/web/guides/quick-start
