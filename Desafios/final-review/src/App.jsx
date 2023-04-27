import { Header } from './components/Header'
import { Products } from './components/Products'
import { useProducts } from './hooks/useProducts'

function App () {
  const { mappedProducts } = useProducts()
  return (
    <>
      <Header />
      <main className='mt-3'>
        <Products products={mappedProducts} />
      </main>
    </>
  )
}

export default App
