import { Products } from './components/Products'
import { products as initialProducts } from './mocks/products.json'

function App () {
  return (
    <>
      <p>hola desde App</p>
      <Products products={initialProducts} />
    </>
  )
}

export default App
