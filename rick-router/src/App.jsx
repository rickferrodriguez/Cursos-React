import { useEffect, useState } from 'react'
import About from './Pages/About'
import Home from './Pages/Home'
import { EVENTS } from './constants'

export function navigation (href) {
  window.history.pushState({}, '', href)
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

function App () {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const updatePath = () => {
      return setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, updatePath)
    window.addEventListener(EVENTS.POPSTATE, updatePath)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, updatePath)
      window.removeEventListener(EVENTS.POPSTATE, updatePath)
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
