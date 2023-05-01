import { Header } from './components/Header'
import { Products } from './components/Products'
import { useProducts } from './hooks/useProducts'

function App () {
  const { products, getProducts } = useProducts()
  return (
    <>
      <Header />
      <main className='mt-3'>
        <Products products={products} />
      </main>
    </>
  )
}

export default App
