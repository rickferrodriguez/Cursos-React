import { useEffect, useState } from 'react'
import { EVENTS } from './constants'

export function Router ({ routes = [], defaultComponent: DefaultComponent = () => null }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const updatePath = () => {
      return setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, updatePath)
    window.addEventListener(EVENTS.POPSTATE, updatePath)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, updatePath)
      window.removeEventListener(EVENTS.POPSTATE, updatePath)
    }
  }, [])

  const Page = routes.find(route => route.path === currentPath)?.Component

  return Page ? <Page /> : <DefaultComponent />
}
