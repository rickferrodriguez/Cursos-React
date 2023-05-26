import { Router } from './Router'
import About from './pages/About'
import Home from './pages/Home'

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
    Component: () => <h1>Twitch</h1>
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
