function ListOfMovies ({ mappedMovies }) {
  return (
    <ul className='grid grid-cols-fit text-center list-none gap-4'>
      {
        mappedMovies.map(movie => (
          <li
            className='flex flex-col gap-4 p-4 justify-center items-center
            border-solid border-cyan-400 rounded'
            key={movie.id}
          >
            <section className='flex flex-col gap-4'>
              <h3 className='p-0 m-0 h-[50px]'>{movie.title}</h3>
              <p className='p-0 m-0'>{movie.year}</p>
            </section>
            <img
              className='w-[250px] aspect-[3/4] object-contain'
              src={movie.poster} alt={movie.title}
            />
            <p className='m-0'>{movie.type}</p>
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
