import About from './pages/About'
import Home from './pages/Home'
import Page404 from './Pages/Page404'
import { Route } from './Route'
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
    path: '/search/:query',
    Component: () => <h1>Hola de Twitch</h1>
  }
]

function App () {
  return (
    <main>
      <Router routes={routes} defaultComponent={Page404}>
        <Route path='/' component={Home} />
        <Route path='/about' component={About} />
      </Router>
    </main>
  )
}

export default App
