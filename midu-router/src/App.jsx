import { useEffect, useState } from 'react'
import { EVENTS } from './constants'
import { About } from './pages/About'
import { Home } from './pages/Home'

function App () {
  const [actualPath, setActualPath] = useState(window.location.pathname)

  useEffect(() => {
    const refreshLocation = () => {
      setActualPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHEVENT, refreshLocation)
    window.addEventListener(EVENTS.POPEVENT, refreshLocation)

    return () => {
      window.removeEventListener(EVENTS.PUSHEVENT, refreshLocation)
      window.removeEventListener(EVENTS.POPEVENT, refreshLocation)
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
