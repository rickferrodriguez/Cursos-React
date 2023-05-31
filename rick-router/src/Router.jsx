import { match } from 'path-to-regexp'
import { Children, useEffect, useState } from 'react'
import { EVENTS } from './constants'

export function Router ({ children, routes = [], defaultComponent: DefaultComponent = () => null }) {
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

  let routeParams = {}

  const routesFromChildren = Children.map(children, ({ type, props }) => {
    const { name } = type

    const isRoute = name === 'Route'

    return isRoute ? props : null
  })

  const routesToUse = routes.concat(routesFromChildren)

  const Page = routesToUse.find(({ path }) => {
    if (path === currentPath) return true

    const matcherPath = match(path, { decode: decodeURIComponent })
    const matched = matcherPath(currentPath)

    if (!matched) return false

    routeParams = matched.params
    return true
  })?.Component

  return Page ? <Page routeParams={routeParams} /> : <DefaultComponent routeParams={routeParams} />
}
