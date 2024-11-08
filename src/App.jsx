
import React, { useState } from 'react';
import Card from './card';
import './Form.css';

function App() {
  const [genero, setGenero] = useState('');
  const [cancion, setCancion] = useState('');
  const [artista, setArtista] = useState('');
  const [error, setError] = useState(false);

  // Datos predefinidos en `datosIngresados`
  const [datosIngresados, setDatosIngresados] = useState([
    { genero: "Salsa", cancion: "Sin sentimientos", artista: "Grupo Niche" },
    { genero: "Rock", cancion: "Tren al Sur", artista: "Los Prisioneros" },
    { genero: "Cumbia", cancion: "Motor y motivo", artista: "Grupo 5" },
    { genero: "Cumbia", cancion: "Cervecero", artista: "Armonia 10" },
    { genero: "Salsa", cancion: "Asia", artista: "Willie Colon" }
  ]);

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (genero.length >= 3 && !genero.startsWith(' ') && cancion.length >= 6 && artista.length >= 3) {
      setError(false);
      setDatosIngresados([...datosIngresados, { genero, cancion, artista }]);
      setGenero('');
      setCancion('');
      setArtista('');
    } else {
      setError(true);
    }
  };

  return (
    <div className="contenedor-app">
      <h1>Formulario de Música</h1>
      <form onSubmit={manejarEnvio} className="contenedor-formulario">
        <label>
          Género Musical:
          <input 
            type="text" 
            value={genero} 
            onChange={(e) => setGenero(e.target.value)} 
            placeholder="Ingrese el género musical" 
            className="entrada-formulario"
          />
        </label>
        <label>
          Canción:
          <input 
            type="text" 
            value={cancion} 
            onChange={(e) => setCancion(e.target.value)} 
            placeholder="Ingrese el nombre de la canción" 
            className="entrada-formulario"
          />
        </label>
        <label>
          Artista:
          <input 
            type="text" 
            value={artista} 
            onChange={(e) => setArtista(e.target.value)} 
            placeholder="Ingrese el nombre del artista" 
            className="entrada-formulario"
          />
        </label>
        <button type="submit" className="boton-envio">Enviar</button>
      </form>
      
      {error && <p className="mensaje-error">Por favor, verifica que la información ingresada sea correcta</p>}

      <div className="grid-tarjetas">
        {datosIngresados.map((dato, indice) => (
          <Card key={indice} data={dato} />
        ))}
      </div>
    </div>
  );
}

export default App;
