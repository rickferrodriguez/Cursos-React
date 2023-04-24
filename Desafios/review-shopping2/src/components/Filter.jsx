import { useId, useState } from 'react'

export function Filter ({ onChange }) {
  const [minPrice, setMinPrice] = useState(0)

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleMinPriceFilter = (event) => {
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
            value={minPrice}
            type='range'
            max='1000'
            min='0'
          />
          <span>{minPrice}</span>
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
