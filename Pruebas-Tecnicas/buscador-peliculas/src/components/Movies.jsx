function ListOfMovies ({ mappedMovies }) {
  return (
    <ul className='movies'>
      {
                  mappedMovies.map(movie => (
                    <li key={movie.id}>
                      <h3>{movie.title}</h3>
                      <p>{movie.title}</p>
                      <img src={movie.poster} alt={movie.title} />
                    </li>
                  ))
                }
    </ul>
  )
}

function NoMoviesFounded () {
  return <p>Movie not found</p>
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0
  return (
    hasMovies
      ? <ListOfMovies mappedMovies={movies} />
      : <NoMoviesFounded />
  )
}
