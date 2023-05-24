import { useEffect, useState } from 'react'
import { NAV_EVENTS } from './constants.js'

export function Router ({ routes = [], defaultComponent: DefaultComponent = () => null }) {
  const [currentPage, setCurrentPage] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPage(window.location.pathname)
    }

    window.addEventListener(NAV_EVENTS.PUSH, onLocationChange)
    window.addEventListener(NAV_EVENTS.POP, onLocationChange)

    return () => {
      window.removeEventListener(NAV_EVENTS.PUSH, onLocationChange)
      window.removeEventListener(NAV_EVENTS.POP, onLocationChange)
    }
  }, [])

  const Page = routes.find(({ path }) => path === currentPage)?.Component
  return Page ? <Page /> : <DefaultComponent />
}
