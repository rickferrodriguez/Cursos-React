import { useContext, useId } from 'react'
import './Filter.css'

import { FiltersContext } from '../context/filters'

export function Filters () {
  const { filters, setFilters } = useContext(FiltersContext)

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleMinPrice = (event) => {
    const newPrice = event.target.value
    // setMinPrice(newPrice)
    setFilters(prevState => ({
      ...prevState,
      minPrice: newPrice
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
        <label htmlFor={minPriceFilterId}>
          Price
        </label>
        <input
          onChange={handleMinPrice}
          value={filters.minPrice}
          type='range' id={minPriceFilterId} min='0' max='1000'
        />
        <span>$ {filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>
          Category
        </label>
        <select
          onChange={handleCategory}
          name='category' id={categoryFilterId}
        >
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
        </select>
      </div>
    </section>
  )
}
