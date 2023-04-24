import { useContext, useId } from 'react'
import { FilterContext } from '../context/filters'

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
    <section className='flex gap-7 w-full text-gray-100 font-semibold'>
      <div className=' flex flex-col gap-1'>
        <label htmlFor={minPriceFilterId}>Price:</label>
        <div className='flex gap-2'>
          <input
            onChange={handlePriceFilterChange}
            value={filters.minPrice}
            type='range'
            id={minPriceFilterId}
            min='0'
            max='1000'
          />
          <span className='w-[30px]'>{filters.minPrice}</span>
        </div>
      </div>
      <div className='flex flex-col gap-1'>
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
