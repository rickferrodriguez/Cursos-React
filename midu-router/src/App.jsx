import About from './pages/About'
import Home from './pages/Home'
import { Router } from './Router'

const routes = [
  {
    path: '/',
    Component: Home
  },
  {
    path: '/about',
    Component: About
  },
  {
    path: '/twitch',
    Component: () => <h1>Hola de Twitch</h1>
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
