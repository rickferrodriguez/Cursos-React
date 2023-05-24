import { match } from 'path-to-regexp'
import { Children, useEffect, useState } from 'react'
import { NAV_EVENTS } from './constants.js'

export function Router ({ children, routes = [], defaultComponent: DefaultComponent = () => null }) {
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

  let routeParams = {}

  const routesFromChildren = Children.map(children, ({ type, props }) => {
    const { name } = type
    const isRoute = name === 'Route'

    return isRoute ? props : null
  })

  const routeToUse = routes.concat(routesFromChildren)

  const Page = routeToUse.find(({ path }) => {
    if (path === currentPage) return true

    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPage)
    if (!matched) return false

    routeParams = matched.params
    return true
  })?.Component

  return Page
    ? <Page routeParams={routeParams} />
    : <DefaultComponent routeParams={routeParams} />
}
