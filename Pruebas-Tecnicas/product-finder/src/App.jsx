import { Products } from './components/Products.jsx'
import { useGetSearch } from './hooks/useGetSearch.jsx'
import { useSearchValidations } from './hooks/useSearchValidations.jsx'

function App () {
  const { search, setSearch, error } = useSearchValidations()
  const { products, getProducts } = useGetSearch({ search })

  const handleSubmit = (event) => {
    event.preventDefault()
    getProducts()
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    if (newSearch.startsWith(' ')) return

    setSearch(newSearch)
  }

  return (
    <main className='w-full bg-slate-600 h-full'>
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
            className='border rounded text-white font-bold bg-sky-700 border-sky-400 px-2 py-1'
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
