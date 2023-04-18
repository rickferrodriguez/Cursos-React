import { useContext } from 'react'
import { Cart } from './components/Cart'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { CartProvider } from './context/cart'
import { FilterContext } from './context/filters'
import { products as initialProducts } from './mocks/withResults.json'

function App () {
  const { filterProducts } = useContext(FilterContext)
  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
    </CartProvider>
  )
}

export default App
