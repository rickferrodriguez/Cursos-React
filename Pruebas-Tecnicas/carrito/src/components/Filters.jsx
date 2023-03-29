import { useState } from 'react'
import './Filters.css'

export function Filters () {
  const [range, setRange] = useState(0)

  const handleRange = (event) => {
    const newRange = event.target.value
    setRange(newRange)
  }

  return (
    <section>
      <div className='filters'>
        <span>Price pool</span>
        <input type='range' onChange={handleRange} value={range} min='0' max='1000' />
        <span>{range}</span>
      </div>
      <div />
    </section>
  )
}
