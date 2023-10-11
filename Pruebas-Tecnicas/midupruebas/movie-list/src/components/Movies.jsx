import { MovieIcon, MovieYear, SeriesIcon } from './Icons.jsx'

export function Movies({ movies }) {
  return (
    <ul className='grid grid-cols-3 gap-3'>
      {movies.map((movie) => (
        <li key={movie.imdbID} className=' text-gray-400'>
          <header className='rounded-md overflow-hidden'>
            <img
              className='w-auto  aspect-[3/4] object-fill'
              src={movie.Poster}
              alt={movie.Title}
            />
            <section className='flex justify-between font-medium text-sm bg-slate-700 pr-1 py-1'>
              <div className='flex items-center bg-blue-950 ml-1 rounded-md pr-1'>
                <label className='scale-[65%]'>
                  <MovieYear />
                </label>
                <span>{movie.Year.split('', 4)}</span>
              </div>
              <div className='flex items-center'>
                <label className='scale-[70%]'>
                  {movie.Type === 'movie' ? <MovieIcon /> : <SeriesIcon />}
                </label>
                <span>{movie.Type}</span>
              </div>
            </section>
          </header>
          <span className='line-clamp-2'>{movie.Title}</span>
        </li>
      ))}
    </ul>
  )
}
