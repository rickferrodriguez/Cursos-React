import { useState } from 'react'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { products as initialProducts } from './mocks/products.json'

function App () {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter(item => {
      return (
        item.price >= filters.minPrice &&
        (filters.category === 'all' || item.category === filters.category)
      )
    })
  }

  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
      <Header handleFilter={setFilters} />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
