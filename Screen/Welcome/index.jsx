import React from 'react';
import './welcome.css';

function Welcome() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>App con React</h1>
        <p>Bienvenido a mi app donde podrás consultar temas interesantes</p>
        <div className="buttons">
          <button onClick={() => alert('Ir al listado de teas')}>Ir al listado de teas</button>
          <button onClick={() => alert('Más sobre mí')}>Más sobre mí</button>
        </div>
      </header>
    </div>
  );
}

export default Welcome;