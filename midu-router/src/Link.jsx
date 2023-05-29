import { EVENTS } from './constants'

export function navigate (href) {
  window.history.pushState({}, '', href)
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

export function Link ({ to, target, ...props }) {
  const handleClick = (event) => {
    event.preventDefault()
    navigate(to)
  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
}
