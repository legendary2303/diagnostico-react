import React from 'react';
import './sobre.css';

function Sobre( {setCurrentView } ) {
  return (
    <div>
      <h2>Sobre Mí</h2>
      <p>Aquí puedes leer más sobre mí.</p>
      <button onClick={() => setCurrentView('welcome')}>Volver</button>
    </div>
  );
}

export default Sobre;
