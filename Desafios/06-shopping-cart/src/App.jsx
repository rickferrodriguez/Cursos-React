import { useState } from 'react'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { products as initialProducts } from './mocks/withResults.json'

function App () {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducs = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice && (
          filters.category === 'all' ||
          filters.category === product.category
        )
      )
    })
  }

  const filteredProducts = filterProducs(products)

  return (
    <>
      <Header changeFilter={setFilters} />

      <main>
        <Products products={filteredProducts} />
      </main>
    </>
  )
}

export default App
