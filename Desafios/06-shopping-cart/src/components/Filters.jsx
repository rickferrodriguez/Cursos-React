import { useId, useState } from 'react'
import './Filter.css'

export function Filters ({ onChange }) {
  const [minPrice, setMinPrice] = useState(0)
  const priceItemId = useId()
  const categoryItemId = useId()

  const handleMinPriceChange = (event) => {
    const newPrice = event.target.value
    setMinPrice(newPrice)
    onChange((prevState) => ({
      ...prevState,
      minPrice: newPrice
    }))
  }

  const handleCategoryChange = (event) => {
    const newCategory = event.target.value
    onChange((prevState) => ({
      ...prevState,
      category: newCategory
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={priceItemId}>min Price:</label>
        <input
          type='range'
          id={priceItemId}
          min='0'
          max='1000'
          value={minPrice}
          onChange={handleMinPriceChange}
        />
        <span>{minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryItemId}> Category:</label>
        <select
          name='category'
          id={categoryItemId}
          onChange={handleCategoryChange}
        >
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
        </select>
      </div>
    </section>
  )
}
