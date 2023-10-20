import { SearchIcon } from './components/Icons'

function App() {
  return (
    <main>
      <header className='flex flex-col items-center gap-4'>
        <h1 className='text-xl text-center text-gray-100 font-bold'>
          Search Movies...
        </h1>
        <form className='flex gap-2 items-center bg-slate-950 w-[50%] rounded-md px-2 py-2 '>
          <button className='px-2'>
            <i className='scale-[20%] text-gray-400 hover:text-gray-200'>
              <SearchIcon />
            </i>
          </button>
          <input
            type='text'
            className='w-full text-gray-300 py-1  bg-slate-950 outline-none text-base'
            placeholder='Search Movies...'
          />
        </form>
      </header>
    </main>
  )
}

export default App
