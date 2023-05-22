import { useEffect, useState } from 'react'
import './App.css'
import { EVENTS } from './constants'
import { About } from './pages/About'
import { Home } from './pages/Home'

function navigate (href) {
  window.history.pushState({}, '', href)
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

function App () {
  // contiene la ruta donde se encuentra actualmente la página
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.addEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  return (
    <main>
      {currentPath === '/' && <Home navigate={navigate} />}
      {currentPath === '/about' && <About navigate={navigate} />}
    </main>
  )
}

export default App
