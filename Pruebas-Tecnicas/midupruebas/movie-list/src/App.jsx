import { MovieIcon, SearchIcon, SeriesIcon } from './components/Icons'
import moviesResult from './mocks/withResults.json'

function App() {
  const movies = moviesResult.Search
  const typeOfData = (type) => {
    return type === 'movie' ? <MovieIcon /> : <SeriesIcon />
  }
  return (
    <>
      <header className='flex flex-col items-center gap-4 mb-9'>
        <h1 className='text-xl text-center text-gray-100 font-bold'>
          Search Movies...
        </h1>
        <form className='flex gap-2 items-center bg-slate-950  rounded-md px-2 py-2 md:w-[50%] w-full'>
          <button className='px-2'>
            <i className='scale-[20%] text-gray-400 hover:text-gray-200'>
              <SearchIcon />
            </i>
          </button>
          <input
            type='text'
            className='w-full text-gray-300 py-1  bg-slate-950 outline-none text-base'
            placeholder='Search movies...'
          />
        </form>
      </header>
      <main>
        <ul className='grid lg:grid-cols-[repeat(5,_1fr)] grid-cols-[repeat(3,_1fr)] gap-3 text-gray-400'>
          {movies.map((movie) => (
            <li key={movie.imdbID}>
              <header className='bg-slate-900 rounded-lg overflow-hidden'>
                <img
                  className='aspect-[2/3] object-fill '
                  src={movie.Poster}
                  alt={movie.Title}
                />
                <section className='flex py-1 justify-between text-sm px-1'>
                  <div className='rounded-md px-1 flex items-center'>
                    <span>{movie.Year}</span>
                  </div>
                  <div className='flex bg-sky-950 rounded-md font-medium'>
                    <i className='scale-[65%]'>{typeOfData(movie.Type)}</i>
                    <span className='mr-1'>{movie.Type}</span>
                  </div>
                </section>
              </header>
              <h3 className='line-clamp-2'>{movie.Title}</h3>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default App
