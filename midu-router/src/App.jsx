import { useEffect, useState } from 'react'
import './App.css'
import { About } from './pages/About'
import { Home } from './pages/Home'

const NAVIGATION_EVENT = 'pushstate'

function navigate (href) {
  window.history.pushState({}, '', href)
  const navigationEvent = new Event(NAVIGATION_EVENT)
  window.dispatchEvent(navigationEvent)
}

function App () {
  // contiene la ruta donde se encuentra actualmente la página
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(NAVIGATION_EVENT, onLocationChange)

    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange)
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
