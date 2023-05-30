import { EVENTS } from './constants'

function navigate (href) {
  window.history.pushState({}, '', href)
  const navigateEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigateEvent)
}

export function Link ({ target, to, ...props }) {
  const handleClick = (event) => {
    const primaryEvent = event.button === 0
    const isModifiedEvent = event.shiftKey || event.ctrlKey || event.metaKey || event.altKey
    const isThisTarget = target === undefined || target === '_self'

    if (primaryEvent && isThisTarget && !isModifiedEvent) {
      event.preventDefault()
      navigate(to)
    }
  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
}
