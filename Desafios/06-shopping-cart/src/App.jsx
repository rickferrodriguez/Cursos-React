import { useContext } from 'react'
import { Cart } from './components/Cart'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { FilterContext } from './context/filterContex'
import { products as initialProducts } from './mocks/withResults.json'

function App () {
  const { filterProducts } = useContext(FilterContext)
  const filteredProducts = filterProducts(initialProducts)
  return (
    <>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
