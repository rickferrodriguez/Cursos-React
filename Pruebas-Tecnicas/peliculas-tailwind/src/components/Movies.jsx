function ListOfMovies ({ mappedMovies }) {
  return (
    <ul className='grid w-full grid-cols-fit text-center list-none gap-4 p-0'>
      {
        mappedMovies.map(movie => (
          <li
            className='flex flex-col gap-4 justify-center items-center
            border-solid border-cyan-400 rounded'
            key={movie.id}
          >
            <h3 className='p-2 m-0 h-[35px]'>{movie.title}</h3>
            <img
              className='overflow-hidden w-full aspect-[4/3] object-contain'
              src={movie.poster} alt={movie.title}
            />
            <section className='flex items-center gap-2'>
              <p className='m-2'>{movie.type}</p>
              <p className='p-0 m-0'>{movie.year}</p>
            </section>
          </li>
        ))
      }
    </ul>
  )
}

function NoMovie () {
  return (
    <h3 className='text-center'>No hay películas</h3>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0
  return (
    hasMovies
      ? <ListOfMovies mappedMovies={movies} />
      : <NoMovie />
  )
}
