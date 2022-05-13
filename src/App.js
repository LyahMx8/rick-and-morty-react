import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Characters } from "./components/Characters";
import { Pagination } from "./components/Pagination";

function App() {
  const [characters, setCharacters] = useState([]);

  const [info, setinfo] = useState({});

  const initialUrl = `https://rickandmortyapi.com/api/character/`;

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setinfo(data.info);
      })
      .catch((error) => console.error(error));
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  };
  const onNext = () => {
    fetchCharacters(info.next);
  };

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, [initialUrl]);

  return (
    <>
      <div class="main">
        <Navbar brand="Rick And Morty App" />

        <main class="characters-list">
          <Pagination
            prev={info.prev}
            next={info.next}
            onPrevious={onPrevious}
            onNext={onNext}
          />
          <Characters characters={characters} />
          <Pagination
            prev={info.prev}
            next={info.next}
            onPrevious={onPrevious}
            onNext={onNext}
          />
        </main>
      </div>
    </>
  );
}

export default App;
