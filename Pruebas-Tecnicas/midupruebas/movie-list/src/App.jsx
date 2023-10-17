import { Header } from './components/Header'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const { movies } = useMovies()
  return (
    <main className='flex flex-col gap-4'>
      <Header />
      <Movies movies={movies} />
    </main>
  )
}

export default App
