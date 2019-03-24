export const loadPokemonDetail = (offset, limit) => {
  const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

  return fetch(url)
    .then(res => {
      if (res.status === 404) {
        return Promise.reject("Not Found");
      }
      return res;
    })
    .then(res => res.json());
};
