import { useState } from 'react'

export function FormProducts () {
  const [search, setSearch] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(search)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
  }

  return (
    <header>
      <form className='flex flex-col gap-2 items-center' onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={search} name='search' className='text-gray-900' />
        <button type='submit' className='bg-sky-400 p-2 rounded w-[100px]'>Buscar</button>
      </form>
    </header>
  )
}
