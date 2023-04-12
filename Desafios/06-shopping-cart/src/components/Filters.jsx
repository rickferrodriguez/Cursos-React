import { useContext, useId } from 'react'
import './Filter.css'

import { FilterContext } from '../context/filterContex'

export function Filters () {
  const { filters, setFilters } = useContext(FilterContext)
  const priceItemId = useId()
  const categoryItemId = useId()

  const handleMinPriceChange = (event) => {
    const newPrice = event.target.value
    setFilters((prevState) => ({
      ...prevState,
      minPrice: newPrice
    }))
  }

  const handleCategoryChange = (event) => {
    const newCategory = event.target.value
    setFilters((prevState) => ({
      ...prevState,
      category: newCategory
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={priceItemId}>min Price:</label>
        <input
          type='range'
          id={priceItemId}
          min='0'
          max='1000'
          value={filters.minPrice}
          onChange={handleMinPriceChange}
        />
        <span>{filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryItemId}> Category:</label>
        <select
          name='category'
          id={categoryItemId}
          onChange={handleCategoryChange}
        >
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
        </select>
      </div>
    </section>
  )
}
