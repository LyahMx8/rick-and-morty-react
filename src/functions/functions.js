import axios from "axios";

// Fetch example
// const fetchCharacters = (url) => {
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         setCharacters(data.results);
//         setinfo(data.info);
//       })
//       .catch((error) => console.error(error));
//   };

// Axios example
const fetchCharacters = async (url, state) => {
  const characters = await axios.get(url);
  state(characters.data.results);
  state(characters.data.info);
};

const uniqueCharacter = async (id, state) => {
    const character = await 
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    state(console.log(character))
}

export { 
    fetchCharacters,
    uniqueCharacter
};
