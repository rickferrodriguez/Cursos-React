import { useEffect, useState } from 'react'
import { EVENTS } from './constants'

export function Router ({ routes = [], defaultComponent: DefaultComponent = () => null }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const lookForPathChange = () => {
      return setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, lookForPathChange)
    window.addEventListener(EVENTS.POPSTATE, lookForPathChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, lookForPathChange)
      window.removeEventListener(EVENTS.POPSTATE, lookForPathChange)
    }
  }, [])

  const Page = routes.find(item => item.path === currentPath)?.Component
  return Page ? <Page /> : <DefaultComponent />
}
