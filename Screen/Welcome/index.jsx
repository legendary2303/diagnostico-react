import React from 'react';
import './welcome.css';


function Welcome( {setCurrentView } ) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>App con React</h1>
        <p>Bienvenido a mi app donde podrás consultar temas interesantes</p>
        <div className="buttons">
          <button onClick={() => setCurrentView('tareas')}>Ir al listado de tareas</button>
        <button onClick={() => setCurrentView('sobre')}>Más sobre mí</button>
        </div>
      </header>
    </div>
  );
}

export default Welcome;