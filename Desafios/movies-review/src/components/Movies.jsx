export function ListOfMovies ({ movie }) {
  return (
    <li className='grid justify-center items-center w-full gap-2'>
      <strong className='text-center'>{movie.title}</strong>
      <img className='w-[250px] aspect-[3/4] object-contain' src={movie.image} alt={movie.title} />
    </li>

  )
}

export function NoMovies () {
  return (
    <p>No existen películas</p>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0
  return (
    <main className='flex justify-center'>
      {
        hasMovies
          ? (
            <ul className='grid grid-cols-1 gap-5 justify-center'>
              {
              movies.map(movie => (
                <ListOfMovies key={movie.id} movie={movie} />
              ))
            }
            </ul>
            )
          : <NoMovies />
      }
    </main>
  )
}
