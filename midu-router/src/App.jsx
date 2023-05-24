import { lazy, Suspense } from 'react'
import Page404 from './pages/404'
import SearchPage from './pages/Search'
import { Route } from './Route'
import { Router } from './Router'

const About = (lazy(() => import('./pages/About.jsx')))
const Home = (lazy(() => import('./pages/Home.jsx')))

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
    Component: SearchPage
  }
]

function App () {
  return (
    <Suspense fallback={null}>
      <Router routes={routes} defaultComponent={Page404}>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About} />
      </Router>
    </Suspense>
  )
}

export default App
