function App () {
  return (
    <div className='flex flex-col items-center justify-center font-inter'>
      <header className='flex flex-col gap-4'>
        <h1 className='text-center text-3xl text-gray-200'>Movie Search</h1>
        <form className='flex gap-4 h-8'>
          <input type='text' name='search' value='' />
          <button className='px-4  border-none rounded text-gray-50 bg-sky-400' type='submit'>Search</button>
        </form>
      </header>
    </div>
  )
}

export default App
