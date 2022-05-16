import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { uniqueCharacter } from "../../functions/services";

export function Character() {
  const params = useParams();
  const [personaje, setPersonaje] = useState(null);

  useEffect(() => {
    uniqueCharacter(params.id, setPersonaje);
  }, [params.id]);

  return (
    <>
      {personaje != null ? (
        <section className="character">
          <img src={personaje.image} alt={personaje.name} />
          <div>{personaje.name}</div>
        </section>
      ) : (
        "Este personaje no existe"
      )}
    </>
  );
}
