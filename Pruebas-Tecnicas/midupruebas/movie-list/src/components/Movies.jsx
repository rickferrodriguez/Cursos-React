import { MovieIcon, SeriesIcon } from '../components/Icons.jsx'

export function ListOfMovies({ movies }) {
  const typeOfData = (type) => {
    return type === 'movie' ? <MovieIcon /> : <SeriesIcon />
  }

  return (
    <ul className='grid lg:grid-cols-[repeat(5,_1fr)] grid-cols-[repeat(3,_1fr)] gap-3 text-gray-400'>
      {movies.map((movie) => (
        <li key={movie.id}>
          <header className='bg-slate-900 rounded-lg overflow-hidden'>
            <img
              className='aspect-[2/3] object-fill '
              src={movie.poster}
              alt={movie.title}
            />
            <section className='flex py-1 justify-between text-sm px-1'>
              <div className='rounded-md px-1 flex items-center'>
                <span>{movie.date}</span>
              </div>
              <div className='flex bg-sky-950 rounded-md font-medium'>
                <i className='scale-[65%]'>{typeOfData(movie.type)}</i>
                <span className='mr-1'>{movie.type}</span>
              </div>
            </section>
          </header>
          <h3 className='line-clamp-2'>{movie.title}</h3>
        </li>
      ))}
    </ul>
  )
}

function NoResponseMovies() {
  return (
    <p className='text-center text-gray-300 font-bold'>
      No existen películas para su búsqueda
    </p>
  )
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0 // es mejor crear una constante que tenga resultado que hacer un 'if'
  return hasMovies ? <ListOfMovies movies={movies} /> : <NoResponseMovies />
}
