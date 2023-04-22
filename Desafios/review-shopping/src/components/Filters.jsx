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
    <section className='flex gap-4 w-full text-gray-100 font-semibold'>
      <div className=' flex gap-1'>
        <label htmlFor={minPriceFilterId}>Min Price:</label>
        <input
          onChange={handlePriceFilterChange}
          value={filters.minPrice}
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
        />
        <span className='w-[30px] font-medium'>{filters.minPrice}</span>
      </div>
      <div className='flex gap-1'>
        <label htmlFor={categoryFilterId}>Category:</label>
        <select
          onChange={handleCategoryFilterChange}
          className='text-gray-950'
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
