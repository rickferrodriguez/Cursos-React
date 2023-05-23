import { useEffect, useState } from 'react'
import About from './pages/About'
import Home from './pages/Home'

const NAV_EVENTS = {
  PUSH: 'pushstate',
  POP: 'popstate'
}

function navigate (href) {
  window.history.pushState({}, '', href)
  const navigationEvent = new Event(NAV_EVENTS.PUSH)
  window.dispatchEvent(navigationEvent)
}

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
      {currentPage === '/' && <Home handleClick={() => { navigate('/about') }} />}
      {currentPage === '/about' && <About handleClick={() => { navigate('/') }} />}
    </main>
  )
}

export default App
