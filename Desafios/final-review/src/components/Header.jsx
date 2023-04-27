import { FormProducts } from './FormProducts'
export function Header () {
  return (
    <header className='flex flex-col gap-3 items-center'>
      <h1 className='font-bold text-2xl text-center'>Product Cart</h1>
      <FormProducts />
    </header>
  )
}
