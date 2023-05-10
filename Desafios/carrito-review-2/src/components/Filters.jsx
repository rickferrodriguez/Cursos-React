import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
  const { filter, setFilter } = useFilters()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handlePriceChange = (event) => {
    const newPrice = event.target.value
    setFilter(prevState => ({
      ...prevState,
      minPrice: newPrice
    }))
  }

  const handleFilterCategory = (event) => {
    const newCategory = event.target.value
    setFilter(prevState => ({
      ...prevState,
      category: newCategory
    }))
  }

  return (
    <section className='flex justify-between items-center'>
      <div className='flex gap-2 items-center'>
        <label htmlFor={minPriceFilterId}>Min Price:</label>
        <input
          type='range'
          id={minPriceFilterId}
          name='price'
          min='0'
          max='1000'
          onChange={handlePriceChange}
          value={filter.minPrice}
        />
        <span className='w-[50px]'>{filter.minPrice}</span>
      </div>

      <div className='flex gap-2 items-center'>
        <label htmlFor={categoryFilterId}>Category</label>
        <select
          onChange={handleFilterCategory}
          className='rounded text-gray-900 px-1'
          name='category'
          id={categoryFilterId}
        >
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
          <option value='fragrances'>Fragances</option>
        </select>
      </div>
    </section>
  )
}
