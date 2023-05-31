import { match } from 'path-to-regexp'
import { Children, useEffect, useState } from 'react'
import { EVENTS } from './constants'

export function Router ({ children, routes = [], defaultComponent: DefaultComponent = () => null }) {
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

  let routeParams = {}

  const childrenRoutes = Children.map(children, ({ type, props }) => {
    const { name } = type
    const isRoute = name === 'Route'

    return isRoute ? props : null
  })

  const routesToUse = routes.concat(childrenRoutes)

  const Page = routesToUse.find(item => {
    if (item.path === currentPath) return true

    const macherUrl = match(item.path, { decode: decodeURIComponent })
    const mached = macherUrl(currentPath)
    if (!mached) return false

    routeParams = mached.params
    return true
  })?.Component

  return Page
    ? <Page routeParams={routeParams} />
    : <DefaultComponent routeParams={routeParams} />
}
