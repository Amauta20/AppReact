
import React from 'react';
import './Form.css';

function Card({ data }) {
  return (
    <div className="contenedor-tarjeta">
      <h2 className="titulo-cancion">{data.cancion}</h2>
      <p><strong>Género:</strong> {data.genero}</p>
      <p><strong>Artista:</strong> {data.artista}</p>
    </div>
  );
}

export default Card;

