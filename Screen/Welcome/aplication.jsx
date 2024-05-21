import React, { useState } from 'react';
import './welcome.css';
import Welcome from './index.jsx';
import Tareas from './tareas.jsx';
import Sobre from './sobre.jsx';

function Applica() {
  const [currentView, setCurrentView] = useState('welcome');

  const renderView = () => {
    switch (currentView) {
       
      case 'tareas':
        return <Tareas setCurrentView={setCurrentView}/>;
      case 'sobre':
        return <Sobre setCurrentView={setCurrentView}/>;
      default:
        return <Welcome setCurrentView={setCurrentView} />;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {renderView()}
      </header>
    </div>
  );
}

export default Applica;
