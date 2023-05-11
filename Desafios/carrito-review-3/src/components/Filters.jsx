import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
  const { filters, setFilters } = useFilters()

  const priceFilterId = useId()
  const categoryFilterId = useId()

  const handlePriceFilter = (event) => {
    const newPrice = event.target.value
    setFilters(prevState => ({
      ...prevState,
      minPrice: newPrice
    }))
  }

  const handleCategoryFilter = (event) => {
    const newCategory = event.target.value
    setFilters(prevState => ({
      ...prevState,
      categories: newCategory
    }))
  }

  return (
    <section className='flex justify-between'>
      <div className='flex gap-2 items-center'>
        <label htmlFor={priceFilterId}>Min price:</label>
        <input
          type='range'
          onChange={handlePriceFilter}
          value={filters.minPrice}
          min='0'
          max='1000'
        />
        <span className='w-[50px]'>{filters.minPrice}</span>
      </div>

      <div className='flex gap-2 items-center'>
        <label htmlFor={categoryFilterId}>Category:</label>
        <select
          onChange={handleCategoryFilter}
          className='text-gray-900 px-1 rounded'
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
