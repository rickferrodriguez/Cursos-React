function ListOfMovies ({ mappedMovies }) {
  return (
    <ul className='list-none text-gray-50 grid grid-cols-fit gap-4'>
      {
        mappedMovies.map(movie => (
          <li
            key={movie.id}
            className='flex flex-col items-center justify-center text-center border-solid border-2 border-sky-200 rounded'
          >
            <section className='h-28 flex flex-col gap-4 justify-center'>
              <h3 className='p-0 m-0'>{movie.title}</h3>
              <p className='p-0 m-0'>{movie.year}</p>
            </section>
            <img
              className='w-[200px] aspect-[3/4] object-contain'
              src={movie.poster} alt={movie.title}
            />
            <p className='w-[100px] py-1 bg-sky-300 text-gray-900 rounded'>{movie.type}</p>
          </li>
        ))
      }
    </ul>
  )
}

function NotFoundMovies () {
  return (
    <p className='text-center text-red-400'>No hay películas para mostrar</p>
  )
}

export function ShowMovies ({ movies }) {
  const hasMovies = movies?.length > 0
  return (
    hasMovies
      ? <ListOfMovies mappedMovies={movies} />
      : <NotFoundMovies />
  )
}
