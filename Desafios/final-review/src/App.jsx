function App () {
  return (
    <>
      <header className='flex flex-col gap-4 items-center'>
        <h1 className='text-4xl text-center text-sky-400 font-bold'>Buscador de Películas</h1>
        <form className='flex gap-3'>
          <input className='rounded' type='text' id='movie-name' />
          <button type='submit'>Buscar</button>
        </form>
      </header>
    </>
  )
}

export default App
