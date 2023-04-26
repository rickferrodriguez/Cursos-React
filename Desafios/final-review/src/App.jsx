import { FormMovies } from './components/FormMovies'
import { Header } from './components/Header'

function App () {
  return (
    <section className='flex flex-col gap-3 items-center'>
      <Header />
      <FormMovies />
    </section>
  )
}

export default App
