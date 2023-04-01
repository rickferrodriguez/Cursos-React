import { Products } from './components/Products.jsx'
import { useSearchValidations } from './hooks/useSearchValidations.jsx'
import withResults from './mocks/withResults.json'

function App () {
  const products = withResults
  const { search, setSearch, error } = useSearchValidations()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(search)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    if (newSearch.startsWith(' ')) return

    setSearch(newSearch)
  }

  return (
    <main className='w-full bg-slate-600 '>
      <header className='flex flex-col gap-4 items-center'>
        <h1 className='text-3xl text-center font-bold text-white'>
          List of Products
        </h1>
        <form
          className='flex gap-4'
          onSubmit={handleSubmit}
        >
          <input
            className='px-2 py-1'
            type='text'
            placeholder='Product Name'
            onChange={handleChange}
            value={search}
          />
          <button
            className='border text-white font-bold bg-sky-700 border-sky-400 px-2 py-1'
            type='submit'
          >
            Buscar
          </button>
        </form>
        <p className='text-red-500'>{error}</p>
      </header>
      <Products products={products} />
    </main>
  )
}

export default App
