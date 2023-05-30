import { EVENTS } from './constants'

export function navigate (href) {
  window.history.pushState({}, '', href)
  const navigateEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigateEvent)
}

export function Link ({ to, target, ...props }) {
  const handleClick = (event) => {
    const primaryEvent = event.button === 0
    const isModifiedEvent = event.shiftKey || event.ctrlKey || event.metaKey || event.altKey
    const isThisTarget = event.target === undefined || event.target === '_self'

    if (primaryEvent && isThisTarget && !isModifiedEvent) {
      event.preventDefault()
      navigate(to)
    }
  }
  return <a onClick={handleClick} href={to} target={target} {...props} />
}
