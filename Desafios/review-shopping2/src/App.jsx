import { Products } from './components/Products'
import { products as initialProducts } from './mocks/withResults.json'

function App () {
  return (
    <Products products={initialProducts} />
  )
}

export default App
