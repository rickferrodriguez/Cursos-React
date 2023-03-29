import { useState } from 'react'
import './App.css'
import { Products } from './components/Products.jsx'
import { Header } from './components/Header.jsx'
import { products as initialProducts } from './mocks/withProducts.json'

function App () {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const handleFilters = (products) => {
    return products.filter((product) => {
      return product.price >= filters.minPrice && (
        filters.category === 'all' ||
        filters.category === product.category
      )
    })
  }

  const filteredProducts = handleFilters(products)

  return (
    <>
      <Header filters={setFilters} />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
