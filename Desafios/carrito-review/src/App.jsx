import { Header } from './components/Header'
import { Products } from './components/Products'
import { products as initialProducts } from './mocks/products.json'

function App () {
  return (
    <>
      <Header />
      <Products products={initialProducts} />
    </>
  )
}

export default App
