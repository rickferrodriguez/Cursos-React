
export function ListOfMovies ({ movies }) {
  return (
    <ul>
      {
        movies.map(movie => {
          const { id, title, year, poster } = movie
          return (
            <li key={id}>
              <h3>{title}</h3>
              <p>{year}</p>
              <img src={poster} alt={title} />
            </li>
          )
        })
      }
    </ul>
  )
}

function NoMoviesResult () {
  return (
    <p>no se encotraron peliculas</p>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0
  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMoviesResult />
  )
}
