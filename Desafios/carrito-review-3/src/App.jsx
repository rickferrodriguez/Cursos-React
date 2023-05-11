import { useState } from 'react'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { products as initialProducts } from './mocks/products.json'

function App () {
  const [filters, setFilters] = useState({
    categories: 'all',
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return product.price >= filters.minPrice && (
        filters.categories === 'all' ||
        filters.categories === product.category
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
