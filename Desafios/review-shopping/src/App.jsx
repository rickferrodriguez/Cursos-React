import { useState } from 'react'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { products as initialProducts } from './mocks/withResults.json'

function App () {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return product.price >= filters.minPrice && (
        filters.category === 'all' ||
        filters.category === product.category
      )
    })
  }

  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
      <Header handleFilters={setFilters} />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
