const fetchCharacters = async (url, characters, info) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      characters(data.results);
      info(data.info);
    })
    .catch((error) => console.error(error));
};

const uniqueCharacter = async (id, state) => {
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      state(data);
    })
    .catch((error) => console.error(error));
};

export { fetchCharacters, uniqueCharacter };
