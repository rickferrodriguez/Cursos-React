import { useFilters } from '../hooks/useFilters'

export function Filters () {
  const { filter, setFilter } = useFilters()

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
    <section className='flex justify-between'>
      <div className='flex gap-2'>
        <label htmlFor='price'>Min Price:</label>
        <input
          type='range'
          id='price'
          name='price'
          min='0'
          max='1000'
          onChange={handlePriceChange}
          value={filter.minPrice}
        />
        <span className='w-[50px]'>{filter.minPrice}</span>
      </div>

      <div className='flex gap-2'>
        <label htmlFor='category'>Category</label>
        <select onChange={handleFilterCategory} className='rounded text-gray-900 px-1' name='category' id='category'>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
        </select>
      </div>
    </section>
  )
}
