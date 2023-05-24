import { Router } from './Router'
import Page404 from './pages/404'
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
      <Router routes={routes} defaultComponent={Page404} />
    </main>
  )
}

export default App
