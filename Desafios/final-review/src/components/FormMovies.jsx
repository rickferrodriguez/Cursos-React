export function FormMovies () {
  return (
    <header>
      <form className='flex flex-col gap-2 items-center'>
        <input type='text' id='name' />
        <button type='submit' className='bg-sky-400 p-2 rounded w-[100px]'>Buscar</button>
      </form>
    </header>
  )
}
