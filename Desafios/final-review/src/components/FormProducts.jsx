import { useState } from 'react'

export function FormProducts () {
  const [search, setSearch] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ search })
  }

  const handleInputChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
  }

  return (
    <header>
      <form className='flex flex-col gap-2 items-center' onSubmit={handleSubmit}>
        <input type='text' id='name' className='text-gray-900' onChange={handleInputChange} />
        <button type='submit' className='bg-sky-400 p-2 rounded w-[100px]'>Buscar</button>
      </form>
    </header>
  )
}
