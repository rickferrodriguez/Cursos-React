import { useContext } from 'react'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { FilterContext } from './context/filters'
import { products as initialProducts } from './mocks/withResults.json'

function App () {
  const { filters } = useContext(FilterContext)

  const filterProducts = (products) => {
    return products.filter(product => {
      return product.price >= filters.minPrice && (
        filters.category === 'all' ||
        product.category === filters.category
      )
    })
  }

  const filteredProducts = filterProducts(initialProducts)
  return (
    <>
      <Header />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
