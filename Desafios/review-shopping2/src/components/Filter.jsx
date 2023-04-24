import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'

export function Filter () {
  const { filters, setFilters } = useFilters()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleMinPriceFilter = (event) => {
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
      category: newCategory
    }))
  }
  return (
    <section className='flex justify-between items-center'>
      <div className='flex flex-col'>
        <label htmlFor={minPriceFilterId}>Price</label>
        <section>
          <input
            onChange={handleMinPriceFilter}
            id={minPriceFilterId}
            value={filters.minPrice}
            type='range'
            max='1000'
            min='0'
          />
          <span>{filters.minPrice}</span>
        </section>
      </div>

      <div className='flex flex-col'>
        <label htmlFor={categoryFilterId}>Category</label>
        <select
          onChange={handleCategoryFilter}
          name='category'
          className='text-gray-950'
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
