export function Movies ({ movies }) {
  return (
    movies.map(movie => (
      <p key={movie.id}>{movie.Title}</p>
    ))
  )
}
