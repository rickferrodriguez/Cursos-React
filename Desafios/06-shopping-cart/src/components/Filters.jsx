import { useContext, useId } from 'react'
import { FiltersContext } from '../context/filtersContext'
import './Filter.css'

export function Filters () {
  const { setFilters, filters } = useContext(FiltersContext)
  const minPriceRangeId = useId()
  const categorySelectorId = useId()

  const handleMinPrice = (event) => {
    const newMinPrice = event.target.value
    setFilters(prevState => ({
      ...prevState,
      minPrice: newMinPrice
    }))
  }

  const handleCategory = (event) => {
    const newCategory = event.target.value
    setFilters(prevState => ({
      ...prevState,
      category: newCategory
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceRangeId}>Min. Price</label>
        <input
          type='range'
          id={minPriceRangeId}
          onChange={handleMinPrice}
          value={filters.minPrice}
          min='0'
          max='1000'
        />
        <strong>{filters.minPrice}</strong>
      </div>

      <div>
        <label htmlFor={categorySelectorId}>Categories</label>
        <select onChange={handleCategory} name='category' id={categorySelectorId}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
        </select>
      </div>
    </section>
  )
}
