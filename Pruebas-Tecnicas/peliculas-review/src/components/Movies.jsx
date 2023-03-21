function ListOfMovies ({ mappedMovies }) {
  return (
    <ul className='movies'>
      {
        mappedMovies.map(movie => (
          <li key={movie.id} className='movie'>
            <article>
              <section className='title-movie'>
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
              </section>
              <img src={movie.poster} alt={movie.title} />
            </article>
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
