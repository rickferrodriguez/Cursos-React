import { Products } from './components/Products.jsx'
import withResults from './mocks/withResults.json'

function App () {
  const products = withResults
  return (
    <main className='w-full bg-slate-600 '>
      <Products products={products} />
    </main>
  )
}

export default App
