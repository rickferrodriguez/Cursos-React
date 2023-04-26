import { FormMovies } from './components/FormMovies'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { products as Initialproducts } from './mocks/withResults.json'

function App () {
  return (
    <>
      <header className='flex flex-col gap-3 items-center'>
        <Header />
        <FormMovies />
      </header>
      <main className='mt-3'>
        <Products products={Initialproducts} />
      </main>
    </>
  )
}

export default App
