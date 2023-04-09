import { useState } from 'react'
import './Filter.css'

export function Filters ({ onChange }) {
  const [minPrice, setMinPrice] = useState(0)

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
        <label htmlFor='price'>
          Price
          <input
            onChange={handleMinPrice}
            value={minPrice}
            type='range' id='price' min='0' max='1000'
          />
        </label>
        <span>{minPrice}</span>
      </div>

      <div>
        <label htmlFor='category'>
          Category
          <select
            onChange={handleCategory}
            name='category' id='category'
          >
            <option value='all'>All</option>
            <option value='laptops'>Laptops</option>
            <option value='smartphones'>Smartphones</option>
          </select>
        </label>
      </div>
    </section>
  )
}
