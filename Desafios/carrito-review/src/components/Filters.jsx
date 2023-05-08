import { useContext, useId } from 'react'
import { FilterContext } from '../contexts/filters'

export function Filters () {
  const { filters, setFilters } = useContext(FilterContext)
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleMinPrice = (event) => {
    const newPrice = event.target.value
    setFilters(lastState => ({
      ...lastState,
      minPrice: newPrice
    }))
  }

  const handleCategory = (event) => {
    const newCategory = event.target.value
    setFilters(lastState => ({
      ...lastState,
      category: newCategory
    }))
  }

  return (
    <section className='flex justify-evenly'>
      <div className='flex gap-2'>
        <label htmlFor={minPriceFilterId}>Price</label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          value={filters.minPrice}
          onChange={handleMinPrice}
        />
        <span className='w-[50px]'>{filters.minPrice}</span>
      </div>

      <div className='flex gap-3'>
        <label htmlFor={categoryFilterId}>Category</label>
        <select
          className='text-gray-900 rounded px-1'
          onChange={handleCategory}
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
