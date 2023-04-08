import { useState } from 'react'
import './Filter.css'

export function Filters ({ onChange }) {
  const [minPrice, setMinPrice] = useState(0)

  const handlePriceChange = (event) => {
    const newPrice = event.target.value
    setMinPrice(newPrice)
    onChange(prevState => ({
      ...prevState,
      minPrice: newPrice
    }))
  }

  const handleChangeCategory = (event) => {
    const newCategory = event.target.value
    onChange(prevState => ({
      ...prevState,
      category: newCategory
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor='price'>Price:</label>
        <input
          onChange={handlePriceChange}
          type='range'
          id='price'
          min='0'
          max='1000'
          value={minPrice}
        />
        <span>{minPrice}</span>
      </div>

      <div>
        <label htmlFor='category'>Category</label>
        <select id='category' onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
        </select>
      </div>
    </section>
  )
}
