import { useEffect, useState } from 'react'
import { About } from './pages/About'
import { Home } from './pages/Home'

const EVENTS = {
  PUSHEVENT: 'pushstate',
  POPEVENT: 'popstate'
}

export function navigate (href) {
  window.history.pushState({}, '', href)
  const navigationEvent = new Event(EVENTS.PUSHEVENT)
  window.dispatchEvent(navigationEvent)
}

function App () {
  const [actualPath, setActualPath] = useState(window.location.pathname)

  useEffect(() => {
    const refreshLocation = () => {
      setActualPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHEVENT, refreshLocation)

    return () => {
      window.removeEventListener(EVENTS.PUSHEVENT, refreshLocation)
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
