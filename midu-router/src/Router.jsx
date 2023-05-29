import { match } from 'path-to-regexp'
import { Children, useEffect, useState } from 'react'
import { EVENTS } from './constants'

export function Router ({ routes = [], defaultComponent: DefaultComponent = () => null }) {
  const [actualPath, setActualPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setActualPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  let routeParams = {}

  const routesFromChildren = Children.map(children, () => {

  })

  const routesToUse = routes.concat(routesFromChildren)

  const Page = routesToUse.find(({ path }) => {
    if (path === actualPath) return true

    const matcherUrl = match(path, { decode: decodeURIComponent })
    const mached = matcherUrl(actualPath)
    if (!mached) return false

    routeParams = mached.params
    return true
  })?.Component

  return Page
    ? <Page routeParams={routeParams} />
    : <DefaultComponent routeParams={routeParams} />
}
