import { Filters } from './Filters'

export function Header () {
  return (
    <header className='mb-6 flex flex-col gap-6 border-b-2 pb-4 border-slate-400'>
      <h1 className='text-3xl font-bold text-sky-500 text-center'>Shopping Cart 🛒</h1>
      <Filters />
    </header>
  )
}
