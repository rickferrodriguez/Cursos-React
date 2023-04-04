import { useEffect, useState } from 'react'
import { Products } from './components/Products.jsx'

function App () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(search)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
  }

  useEffect(() => {
    if (search === '') {
      setError('Please enter a search')
      return
    }

    setError(null)
  }, [search])

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
            className='bg-sky-300 px-4 py-1 rounded font-semibold'
            type='submit'
          >
            Search
          </button>
        </form>
        <p className='text-red-500 text-center'>{error}</p>
      </header>
      <main>
        <Products />
      </main>
    </div>
  )
}

export default App
