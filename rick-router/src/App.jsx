import { Page404 } from './Pages/404'
import About from './Pages/About'
import Home from './Pages/Home'
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
    Component: ({ routeParams }) => <p>Search {routeParams.query}</p>
  }
]

function App () {
  return (
    <>
      <Router routes={routes} defaultComponent={Page404} />
    </>
  )
}

export default App
