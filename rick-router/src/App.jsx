import { useEffect, useState } from 'react'
import About from './Pages/About'
import Home from './Pages/Home'

const EVENTS = {
  PUSHSTATE: 'pushstate',
  POPSTATE: 'popstate'
}

export function navigate (href) {
  window.history.pushState({}, '', href)
  const navigateEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigateEvent)
}

function App () {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const lookForPathChange = () => {
      return setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, lookForPathChange)
    window.addEventListener(EVENTS.POPSTATE, lookForPathChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, lookForPathChange)
      window.removeEventListener(EVENTS.POPSTATE, lookForPathChange)
    }
  }, [])

  return (
    <>
      {currentPath === '/' && <Home />}
      {currentPath === '/about' && <About />}
    </>
  )
}

export default App
