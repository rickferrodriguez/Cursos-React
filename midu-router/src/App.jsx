import { useEffect, useState } from 'react'
import { NAV_EVENTS } from './constants'
import About from './pages/About'
import Home from './pages/Home'

function App () {
  const [currentPage, setCurrentPage] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPage(window.location.pathname)
    }

    window.addEventListener(NAV_EVENTS.PUSH, onLocationChange)
    window.addEventListener(NAV_EVENTS.POP, onLocationChange)

    return () => {
      window.removeEventListener(NAV_EVENTS.PUSH, onLocationChange)
      window.removeEventListener(NAV_EVENTS.POP, onLocationChange)
    }
  }, [])

  return (
    <main>
      {currentPage === '/' && <Home />}
      {currentPage === '/about' && <About />}
    </main>
  )
}

export default App
