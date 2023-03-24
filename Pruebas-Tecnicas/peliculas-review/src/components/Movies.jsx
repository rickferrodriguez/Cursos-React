function ListOfMovies ({ mappedMovies }) {
  return (
    <ul>
      {
        mappedMovies.map(movie => (
          <li key={movie.id}>
            <h1>{movie.title}</h1>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.title} />
          </li>
        ))
      }
    </ul>
  )
}

function NoMovies () {
  return (
    <p>no hay películas</p>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0
  return (
    hasMovies
      ? <ListOfMovies mappedMovies={movies} />
      : <NoMovies />
  )
}
