function ListOfMovies ({ mappedMovies }) {
  return (
    <ul className='grid w-full grid-cols-fit text-center list-none gap-4 p-0'>
      {
        mappedMovies.map(movie => (
          <li
            className=' flex flex-col overflow-hidden justify-center items-center
            border-solid border-cyan-400 rounded'
            key={movie.id}
          >
            <div className='relative'>
              <span className='flex justify-center items-center p-0 m-0 w-[90px] font-bold text-[16px] bg-sky-600 rounded-full drop-shadow-xl h-[22px]
                absolute bottom-2 right-20 z-[3]'
              >{movie.year}
              </span>
              <img
                className='overflow-hidden w-[350px] aspect-square object-contain'
                src={movie.poster} alt={movie.title}
              />
            </div>
            <h3 className='flex items-center m-0 h-[55px]'>{movie.title}</h3>
            <p className='text-[16px] m-2'>{movie.type}</p>
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
