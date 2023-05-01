export function ItemMovie ({ movie }) {
  return (
    <li>
      <article className='flex flex-col gap-2 items-center'>
        <h3>{movie.title}</h3>
        <img className='w-[500px] aspect-[4/3] object-contain' src={movie.image} alt={movie.title} />
      </article>
    </li>
  )
}

export function NoMovies () {
  return (<p>No se encontraron películas</p>)
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0
  return (
    hasMovies
      ? (
        <ul className='grid grid-cols-1 gap-4'>
          {
          movies.map(movie => (
            <ItemMovie key={movie.id} movie={movie} />
          ))
          }
        </ul>
        )
      : <NoMovies />
  )
}
