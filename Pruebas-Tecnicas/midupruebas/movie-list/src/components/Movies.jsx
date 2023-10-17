import { MovieIcon, MovieYear, SeriesIcon } from './Icons.jsx'

export function RenderMovies({ movies }) {
  return (
    <ul className='grid grid-cols-3 gap-3'>
      {movies.map((movie) => (
        <li key={movie.id} className=' text-gray-400'>
          <header className='rounded-md overflow-hidden'>
            <img
              className='w-auto  aspect-[3/4] object-fill'
              src={movie.poster}
              alt={movie.title}
            />
            <section className='flex justify-between font-medium text-sm bg-slate-700 pr-1 py-1'>
              <div className='flex items-center bg-blue-950 ml-1 rounded-md pr-1'>
                <label className='scale-[65%]'>
                  <MovieYear />
                </label>
                <time dateTime={movie.year}>{movie.year.split('', 4)}</time>
              </div>
              <div className='flex items-center justify-center'>
                <label className='scale-[70%]'>
                  {movie.type === 'movie' ? <MovieIcon /> : <SeriesIcon />}
                </label>
                <span className='self-center justify-self-center'>
                  {movie.type}
                </span>
              </div>
            </section>
          </header>
          <span className='line-clamp-2'>{movie.Title}</span>
        </li>
      ))}
    </ul>
  )
}

export function NoMovies() {
  return <p>No hay resultados para esta búsqueda</p>
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0
  return hasMovies ? <RenderMovies movies={movies} /> : <NoMovies />
}
