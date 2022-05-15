import React, { useEffect, useState } from "react";
import { Pagination } from "./Pagination";
import { fetchCharacters } from '../functions/functions';

export function Characters() {

  const [characters, setCharacters] = useState([]);

  const [info, setinfo] = useState({});

  const initialUrl = `https://rickandmortyapi.com/api/character/`;

  const onPrevious = () => {
    fetchCharacters(info.prev, setCharacters, setinfo);
  };
  const onNext = () => {
    fetchCharacters(info.next, setCharacters, setinfo);
  };

  useEffect(() => {
    fetchCharacters(initialUrl, setCharacters, setinfo);
  }, [initialUrl]);

  return (
    <>
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />

      <main className="characters-list">
        {characters.map((item, index) => (
          <article key={index} className="characters__detail">
            <a href={'personaje/' + item.id}>
              <figure className="characters__detail-summary">
                <img className="characters__detail-summary-image" src={item.image} alt={item.name} />
                <figcaption className="characters__detail-summary-name">{item.name}</figcaption>
                <figcaption className="characters__detail-summary-status">{item.status}</figcaption>
              </figure>
            </a>
            <div className="characters__detail-additional">
              <div className="bracket bl"></div>
              <div className="bracket br"></div>
              <p className="characters__detail-additional-text">Specie: {item.species}</p>
              <button className="characters__detail-additional-text">Last known location: {item.location.name}</button>
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
