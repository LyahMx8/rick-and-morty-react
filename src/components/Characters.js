import React, { useEffect, useState } from "react";
import { Pagination } from "./Pagination";

export function Characters() {

  const [characters, setCharacters] = useState([]);

  const [info, setinfo] = useState({});

  const initialUrl = `https://rickandmortyapi.com/api/character/`;

  

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
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />

      <main class="characters-list">
        {characters.map((item, index) => (
          <article key={index} class="characters__detail">
            <a href={'detail/' + item.id}>
              <figure class="characters__detail-summary">
                <img class="characters__detail-summary-image" src={item.image} alt={item.name} />
                <figcaption class="characters__detail-summary-name">{item.name}</figcaption>
                <figcaption class="characters__detail-summary-status">{item.status}</figcaption>
              </figure>
            </a>
            <div class="characters__detail-additional">
              <div class="bracket bl"></div>
              <div class="bracket br"></div>
              <p class="characters__detail-additional-text">Specie: {item.species}</p>
              <button class="characters__detail-additional-text">Last known location: {item.location.name}</button>
            </div>
          </article>
        ))}
      </main>

      <Pagination
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </>
  );
}
