import { FormMovies } from './components/FormMovies'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { useProducts } from './hooks/useProducts'

function App () {
  const { mappedProducts } = useProducts()
  return (
    <>
      <header className='flex flex-col gap-3 items-center'>
        <Header />
        <FormMovies />
      </header>
      <main className='mt-3'>
        <Products products={mappedProducts} />
      </main>
    </>
  )
}

export default App
