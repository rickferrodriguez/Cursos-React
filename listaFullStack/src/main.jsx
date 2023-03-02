import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {Ejercicio1} from './Ejercicio.jsx'
import {Ejercicio2} from './Ejercicio2.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Ejercicio1 />
    <Ejercicio2 />
  </React.StrictMode>,
)
