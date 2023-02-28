import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import RandomList from './randomList.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <RandomList />
  </React.StrictMode>,
)
