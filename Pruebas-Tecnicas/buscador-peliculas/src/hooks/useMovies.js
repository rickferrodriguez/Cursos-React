import withResults from '../mocks/with-results.json'

export function useMovies () {
  const movies = withResults.Search

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    type: movie.Type,
    poster: movie.Poster
  }))
  return { mappedMovies }
}
