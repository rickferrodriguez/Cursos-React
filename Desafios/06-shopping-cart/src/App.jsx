import { Products } from './components/Products'
import withResults from './mocks/withResults.json'

function App () {
  return (
    <div>
      <h1>Shopping cart 🛒</h1>

      <main>
        <Products products={withResults.products} />
      </main>
    </div>
  )
}

export default App
