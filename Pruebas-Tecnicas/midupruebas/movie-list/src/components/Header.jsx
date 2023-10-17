import { Filters } from './Filters'

export function Header({ error, handleSearch, handleSubmit, search }) {
  return (
    <header className='flex flex-col gap-4 items-center'>
      <h1 className='font-bold text-xl text-gray-100'>List of Movies</h1>
      <Filters
        handleSearch={handleSearch}
        handleSubmit={handleSubmit}
        search={search}
      />
      <p className='text-red-500 text-base h-5'>{error}</p>
    </header>
  )
}
