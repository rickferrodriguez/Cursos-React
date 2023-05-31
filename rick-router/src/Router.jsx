import { match } from 'path-to-regexp'
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

  let routeParams = {}

  const Page = routes.find(({ path }) => {
    if (path === currentPath) return true

    const matcherPath = match(path, { decode: decodeURIComponent })
    const matched = matcherPath(currentPath)

    if (!matched) return false

    routeParams = matched.params
    return true
  })?.Component

  return Page ? <Page routeParams={routeParams} /> : <DefaultComponent routeParams={routeParams} />
}
