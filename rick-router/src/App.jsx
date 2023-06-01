import { lazy, Suspense } from 'react'

import { Route } from './Route'
import { Router } from './Router'

const Page404 = lazy(() => import('./Pages/404.jsx'))
const About = lazy(() => import('./Pages/About.jsx'))
const Home = lazy(() => import('./Pages/Home.jsx'))

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
    Component: ({ routeParams }) => <p>Search {routeParams.query}</p>
  }
]

function App () {
  return (
    <main>
      <Suspense fallback={<p>Loading...</p>}>
        <Router routes={routes} defaultComponent={Page404}>
          <Route path='/' Component={Home} />
          <Route path='/about' Component={About} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
