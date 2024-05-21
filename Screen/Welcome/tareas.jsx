import React from 'react';
import './tareas.css';

function Tareas( {setCurrentView } ) {
  return (
    <div>
      <h2>Listado de Teas</h2>
      <p>Aquí puedes consultar el listado de tareas.</p>
      <button onClick={() => setCurrentView('welcome')}>Volver</button>
    </div>
  );
}

export default Tareas;