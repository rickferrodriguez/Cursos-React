import { useContext, useId } from 'react'
import { FilterContext } from '../context/filters'
import './Filters.css'

export function Filters () {
  const { filters, setFilters } = useContext(FilterContext)
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handlePriceFilterChange = (event) => {
    const newPrice = event.target.value
    setFilters(prevState => ({
      ...prevState,
      minPrice: newPrice
    }))
  }

  const handleCategoryFilterChange = (event) => {
    const newCategory = event.target.value
    setFilters(prevState => ({
      ...prevState,
      category: newCategory
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label className='text-gray-100' htmlFor={minPriceFilterId}>
          Min Price:
        </label>
        <input
          onChange={handlePriceFilterChange}
          value={filters.minPrice}
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
        />
        <span>{filters.minPrice}</span>
      </div>
      <div>
        <label className='text-gray-100' htmlFor={categoryFilterId}>Category:</label>
        <select
          onChange={handleCategoryFilterChange}
          name='category'
          id={categoryFilterId}
        >
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
        </select>
      </div>
    </section>
  )
}
