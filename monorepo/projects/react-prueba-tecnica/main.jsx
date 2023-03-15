import { createRoot } from 'react-dom/client'
import { App } from './src/App.jsx'
import './App.css'

const root = createRoot(document.getElementById('app'))

root.render(<App />)
