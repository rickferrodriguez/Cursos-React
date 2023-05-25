import { EVENTS } from './constants'

export function navigate (href) {
  window.history.pushState({}, '', href)
  const navigationEvent = new Event(EVENTS.PUSHEVENT)
  window.dispatchEvent(navigationEvent)
}

export function Link ({ to, target, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === 0
    const isModifiedEvent = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey
    const isTargetEvent = target === undefined || target === '_self'

    if (isMainEvent && isTargetEvent && !isModifiedEvent) {
      event.preventDefault()
      navigate(to)
    }
  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
}
