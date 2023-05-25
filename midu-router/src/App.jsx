import { useState } from 'react'
import { About } from './pages/About'
import { Home } from './pages/Home'

function App () {
  const [actualPath, setActualPath] = useState(window.location.pathname)
  return (
    <main>
      {actualPath === '/' && <Home />}
      {actualPath === '/about' && <About />}
    </main>
  )
}

export default App
