import { MovieIcon, SeriesIcon } from '../components/Icons.jsx'
export function ListOfMovies({ movies }) {
  const typeOfData = (type) => {
    return type === 'movie' ? <MovieIcon /> : <SeriesIcon />
  }
  return (
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
  )
}

function NoResponseMovies() {
  return <p>No existen películas para su búsqueda</p>
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0 // es mejor crear una constante que tenga resultado que hacer un 'if'
  return hasMovies ? <ListOfMovies movies={movies} /> : <NoResponseMovies />
}
