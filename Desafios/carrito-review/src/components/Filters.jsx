import { useState } from 'react'

export function Filters () {
  const [minPrice, setMinPrice] = useState(0)
  const handleMinPrice = (event) => {
    const newPrice = event.target.value
    setMinPrice(newPrice)
  }
  return (
    <section className='flex justify-evenly'>
      <div className='flex gap-2'>
        <label htmlFor='price'>Price</label>
        <input type='range' id='price' min='0' max='1000' value={minPrice} onChange={handleMinPrice} />
        <span className='w-[50px]'>{minPrice}</span>
      </div>

      <div className='flex gap-3'>
        <label htmlFor='category'>Category</label>
        <select className='text-gray-900 rounded px-1' name='category' id='category'>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
        </select>
      </div>
    </section>
  )
}
