import React, { useEffect, useState } from "react";
import Tilt from 'react-parallax-tilt';
import './Characters.css';

import { Pagination } from "../Pagination/Pagination";
import { fetchCharacters } from '../../functions/services';

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
    <section className="characters">
      <div className="gizmo gizmo-top-left"></div>
      <div className="gizmo gizmo-top-right"></div>
      <div className="gizmo gizmo-bottom-left"></div>
      <div className="gizmo gizmo-bottom-right"></div>

      <Pagination
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />

      <main className="characters-list">
        {characters.map((item, index) => (
          <Tilt key={index} className="characters__detail"  
            perspective={1000} 
            gyroscope={true} 
            glareEnable={true}
            glareMaxOpacity={0.9}
            glarePosition="all"
            scale={1}
            tiltMaxAngleX={13} 
            tiltMaxAngleY={13}>
            <a href={'personaje/' + item.id}>
              <figure className="characters__detail-summary">
                <img className="characters__detail-summary-image" src={item.image} alt={item.name} />
                <img className="characters__detail-summary-image poped" src={item.image} alt={item.name} />
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
          </Tilt>
        ))}
      </main>

      <Pagination
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </section>
  );
}
