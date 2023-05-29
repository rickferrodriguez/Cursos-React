import { useEffect, useState } from 'react'
import { EVENTS } from './constants'
import About from './pages/About'
import Home from './pages/Home'

function App () {
  const [actualPath, setActualPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setActualPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  return (
    <main>
      {actualPath === '/' && <Home />}
      {actualPath === '/about' && <About />}
    </main>
  )
}

export default App
