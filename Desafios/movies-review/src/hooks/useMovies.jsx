import withResults from '@/mocks/with-results.json'

export function useMovies () {
  const movies = withResults.Search
  const mappedMovies = movies.map(movie => ({
    title: movie.Title,
    image: movie.Poster,
    type: movie.Type,
    id: movie.imdbID,
    year: movie.Year
  }))

  return { movies: mappedMovies }
}
