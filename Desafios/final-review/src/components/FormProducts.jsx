import { useEffect, useState } from 'react'

function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  useEffect(() => {
    if (search === '') {
      setError('Ingrese un producto para buscar')
      return
    }

    setError(null)
  }, [search])

  return { search, error, setSearch }
}

export function FormProducts () {
  const { search, error, setSearch } = useSearch()
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(search)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
  }

  return (
    <header className='flex flex-col items-center gap-3'>
      <form
        className='flex gap-2 items-center'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          onChange={handleChange}
          value={search}
          name='search'
          className='text-gray-900 px-2 rounded'
        />
        <button type='submit' className='bg-sky-400 p-2 rounded w-[100px]'>
          Buscar
        </button>
      </form>
      <small className='text-red-500'>{error}</small>
    </header>
  )
}
