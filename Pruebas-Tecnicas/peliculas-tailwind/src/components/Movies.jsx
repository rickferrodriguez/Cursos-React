function ListOfMovies ({ mappedMovies }) {
  return (
    <ul className='grid w-full grid-cols-fit list-none gap-6 p-0
      max-md:w-auto max-md:gap-[2rem] max-md:grid-cols-1'
    >
      {
        mappedMovies.map(movie => (
          <li
            className='w-full rounded-[1rem]
            max-md:w-[290px]'
            key={movie.id}
          >
            <div className='relative overflow-hidden flex flex-col rounded-[1rem]  justify-center items-center '>
              <span className='flex justify-center items-center p-0 m-0 w-[90px] font-bold text-[16px] bg-sky-600
                rounded-full drop-shadow-2xl h-[22px]
                absolute bottom-2 right-2 z-[3]
                max-md:right-9 max-md:bottom-4'
              >{movie.year}
              </span>
              <img
                className='overflow-hidden w-[350px] aspect-square object-contain drop-shadow-xl
                max-sm:w-[500px]'
                src={movie.poster} alt={movie.title}
              />
            </div>
            <section className='p-2'>
              <h3 className='m-0 truncate overflow-hidden'>{movie.title}</h3>
              <p className='text-[16px] text-sky-500 font-bold m-0'>{movie.type}</p>
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
