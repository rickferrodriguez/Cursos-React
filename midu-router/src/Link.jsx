import { NAV_EVENTS } from './constants'

export function navigate (href) {
  window.history.pushState({}, '', href)
  const navigationEvent = new Event(NAV_EVENTS.PUSH)
  window.dispatchEvent(navigationEvent)
}

export function Link ({ target, to, ...props }) {
  const handleClick = (event) => {
    const isPrimaryEvent = event.button === 0
    const isModifierEvent = event.metaKey || event.ctrlKey || event.altKey || event.shiftKey
    const isTargetEvent = event.target === undefined || event.target === '_self'

    if (isPrimaryEvent && !isModifierEvent && isTargetEvent) {
      event.preventDefault()
      navigate(to)
    }
  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
}
