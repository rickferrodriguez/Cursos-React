import { Products } from './components/Products.jsx'
import { useGetProducts } from './hooks/useGetProducts.js'
import { useSearchFilters } from './hooks/useSearchFilters.jsx'

function App () {
  const { search, setSearch, error } = useSearchFilters()
  const { games, getSteamGames, loading } = useGetProducts({ search })

  const handleSubmit = (event) => {
    event.preventDefault()
    getSteamGames()
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
  }

  return (
    <div className='w-full py-4 gap-4 flex flex-col p-2'>
      <header className='flex flex-col gap-4'>
        <h1 className='text-2xl font-bold text-gray-200 text-center'>STEAM FINDER</h1>
        <form
          onSubmit={handleSubmit}
          className='flex gap-4 justify-center'
        >
          <input
            onChange={handleChange}
            value={search}
            className={`rounded p-2  ${error !== null ? 'border border-red-500 focus:bg-red-300' : 'border-green-600'}`}
            type='text'
          />
          <button
            className='bg-sky-300 px-4 py-1 rounded font-semibold hover:bg-sky-700'
            type='submit'
          >
            Search
          </button>
        </form>
        <p className='text-red-500 text-center'>{error}</p>
      </header>
      <main>
        {
          loading ? <p className='text-red-200'>Loading...</p> : <Products games={games} />
        }
      </main>
    </div>
  )
}

export default App
