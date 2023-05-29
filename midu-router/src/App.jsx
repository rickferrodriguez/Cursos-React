import { useEffect, useState } from 'react'
import About from './pages/About'
import Home from './pages/Home'

const NAV_EVENTS = {
  PUSHSTATE: 'pushstate',
  POPSTATE: 'popstate'
}

export function navigate (href) {
  window.history.pushState({}, '', href)
  const navigationEvent = new Event(NAV_EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

function App () {
  const [actualPath, setActualPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setActualPath(window.location.pathname)
    }

    window.addEventListener(NAV_EVENTS.PUSHSTATE, onLocationChange)

    return () => {
      window.removeEventListener(NAV_EVENTS.PUSHSTATE, onLocationChange)
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
