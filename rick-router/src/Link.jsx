import { EVENTS } from './constants'

export function navigation (href) {
  window.history.pushState({}, '', href)
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

export function Link ({ to, target, ...props }) {
  const handleClick = (event) => {
    const isPrimaryEvent = event.button === 0
    const isModifiedEvent = event.altKey || event.ctrlKey || event.metaKey || event.shiftKey
    const isSameTarget = target === undefined || target === '_self'

    if (isPrimaryEvent && isSameTarget && !isModifiedEvent) {
      event.preventDefault()
      navigation(to)
    }
  }
  return <a onClick={handleClick} href={to} target={target} {...props} />
}
