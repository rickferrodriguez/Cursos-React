import { useEffect, useState } from 'react'
import { EVENTS } from './constants'

export function Router ({ routes = [], defaultComponent: DefaultComponent = () => null }) {
  const [actualPath, setActualPath] = useState(window.location.pathname)

  useEffect(() => {
    const refreshLocation = () => {
      setActualPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHEVENT, refreshLocation)
    window.addEventListener(EVENTS.POPEVENT, refreshLocation)

    return () => {
      window.removeEventListener(EVENTS.PUSHEVENT, refreshLocation)
      window.removeEventListener(EVENTS.POPEVENT, refreshLocation)
    }
  }, [])

  const Page = routes.find(({ path }) => path === actualPath)?.Component

  return Page ? <Page /> : <DefaultComponent />
}
