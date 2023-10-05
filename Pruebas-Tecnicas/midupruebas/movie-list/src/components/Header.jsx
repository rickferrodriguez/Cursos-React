import { Filters } from './Filters'

export function Header() {
  return (
    <header className='flex flex-col gap-4 items-center'>
      <h1 className='font-bold text-xl text-gray-100'>List of Movies</h1>
      <Filters />
    </header>
  )
}
