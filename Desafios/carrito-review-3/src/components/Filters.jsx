import { useId, useState } from 'react'

export function Filters ({ onChange }) {
  const [minPrice, setMinPrice] = useState(0)

  const priceFilterId = useId()
  const categoryFilterId = useId()

  const handlePriceFilter = (event) => {
    const newPrice = event.target.value
    setMinPrice(newPrice)
    onChange(prevState => ({
      ...prevState,
      minPrice: newPrice
    }))
  }

  const handleCategoryFilter = (event) => {
    const newCategory = event.target.value
    onChange(prevState => ({
      ...prevState,
      categories: newCategory
    }))
  }

  return (
    <section className='flex justify-between'>
      <div className='flex gap-2 items-center'>
        <label htmlFor={priceFilterId}>Min price:</label>
        <input
          type='range'
          onChange={handlePriceFilter}
          value={minPrice}
          min='0'
          max='1000'
        />
        <span className='w-[50px]'>{minPrice}</span>
      </div>

      <div className='flex gap-2 items-center'>
        <label htmlFor={categoryFilterId}>Category:</label>
        <select
          onChange={handleCategoryFilter}
          className='text-gray-900 px-1 rounded'
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
