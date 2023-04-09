import { useId, useState } from 'react'
import './Filter.css'

export function Filters ({ onChange }) {
  const [minPrice, setMinPrice] = useState(0)
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleMinPrice = (event) => {
    const newPrice = event.target.value
    setMinPrice(newPrice)
    onChange(prevState => ({
      ...prevState,
      minPrice: newPrice
    }))
  }

  const handleCategory = (event) => {
    const newCategory = event.target.value
    onChange(prevState => ({
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
          value={minPrice}
          type='range' id={minPriceFilterId} min='0' max='1000'
        />
        <span>{minPrice}</span>
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
