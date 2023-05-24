import { Router } from './Router'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'

const routes = [
  {
    path: '/',
    Component: Home
  },
  {
    path: '/about',
    Component: About
  }
]

function App () {
  return (
    <main>
      <Router routes={routes} />
    </main>
  )
}

export default App
