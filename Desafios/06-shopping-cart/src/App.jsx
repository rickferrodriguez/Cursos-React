import { useState } from 'react'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { useFilters } from './hooks/useFilters'
import { products as initialProducts } from './mocks/withResults.json'

function App () {
  const [products, setProducts] = useState(initialProducts)
  const { filterProducts, setFilters } = useFilters()
  const filteredProducts = filterProducts({ products })

  return (
    <>
      <Header handleFilter={setFilters} />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
