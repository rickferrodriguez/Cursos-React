import { useEffect, useState } from 'react'
import About from './pages/About'
import Home from './pages/Home'

const PUSHEVENT = 'pushstate'

function navigate (href) {
  window.history.pushState({}, '', href)
  const navigationEvent = new Event(PUSHEVENT)
  window.dispatchEvent(navigationEvent)
}

function App () {
  const [currentPage, setCurrentPage] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPage(window.location.pathname)
    }

    window.addEventListener(PUSHEVENT, onLocationChange)

    return () => {
      window.removeEventListener(PUSHEVENT, onLocationChange)
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
