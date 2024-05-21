import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Welcome from '../Screen/Welcome/index.jsx'
import Applica from '../Screen/Welcome/aplication.jsx'
import '../Screen/Welcome/welcome.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>,
)
