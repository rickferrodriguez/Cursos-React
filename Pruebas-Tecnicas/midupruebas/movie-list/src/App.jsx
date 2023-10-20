import { SearchIcon } from './components/Icons'
import moviesResult from './mocks/withResults.json'

function App() {
  const movies = moviesResult.Search
  return (
    <>
      <header className='flex flex-col items-center gap-4 mb-9'>
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
      <main>
        <ul className='grid grid-cols-[repeat(5,_1fr)] gap-5'>
          {movies.map((movie) => (
            <li key={movie.imdbID}>
              <header>
                <img
                  className='aspect-[2/3] object-fill '
                  src={movie.Poster}
                  alt={movie.Title}
                />
              </header>
              <h3>{movie.Title}</h3>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default App
