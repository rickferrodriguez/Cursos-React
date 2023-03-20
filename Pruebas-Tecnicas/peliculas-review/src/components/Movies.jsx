import withResults from '../mocks/with-results.json'

export function Movies () {
  const movies = withResults.Search
  const hasMovies = movies?.length > 0
  return (
    hasMovies
      ? <MappedMovies movies={movies} />
      : <MovieNotFound />
  )
}

function MappedMovies ({ movies }) {
  return (
    movies.map(movie => (
      <li key={movie.imdbID}>
        <img src={movie.Poster} alt={movie.Title} />
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </li>
    ))
  )
}

function MovieNotFound () {
  return (
    <p>No hay resultados para esta película</p>
  )
}
