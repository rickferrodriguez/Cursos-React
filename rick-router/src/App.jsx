import { useState } from 'react'
import About from './Pages/About'
import Home from './Pages/Home'

function App () {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  return (
    <>
      {currentPath === '/' && <Home />}
      {currentPath === '/about' && <About />}
    </>
  )
}

export default App
