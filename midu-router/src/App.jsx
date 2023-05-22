import { useState } from 'react'
import './App.css'
import { About } from './pages/About'
import { Home } from './pages/Home'

function App () {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  return (
    <main>
      {currentPath === '/' && <Home />}
      {currentPath === '/about' && <About />}
    </main>
  )
}

export default App
