import { useState } from 'react'

export function Filters ({ filters }) {
  const [range, setRange] = useState(0)

  const handleRange = (event) => {
    const newRange = event.target.value
    setRange(newRange)
    filters(prevState => ({
      ...prevState,
      minPrice: newRange
    }))
  }

  const handleSelect = (event) => {
    const newSelect = event.target.value
    filters(prevState => ({
      ...prevState,
      category: newSelect
    }))
  }

  return (
    <header>
      <section className='filters'>
        <span>Price Range</span>
        <input type='range' onChange={handleRange} value={range} min='0' max='1000' />
        <span>{range}</span>
      </section>

      <section>
        <label htmlFor='category'>Categories</label>
        <select id='category' onChange={handleSelect}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
        </select>
      </section>
    </header>
  )
}
