import responseMovies from '../mocks/withResults.json'

export function useMovies () {
  const movies = responseMovies.Search
  const mappedMovies = movies.map(movie => ({
    title: movie.Title,
    image: movie.Poster,
    type: movie.Type,
    year: movie.Year,
    id: movie.imdbID
  }))

  return { mappedMovies }
}
