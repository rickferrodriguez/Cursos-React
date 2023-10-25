import moviesResult from '../mocks/withResults.json'
export function useMovies() {
  const movies = moviesResult.Search
  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    poster: movie.Poster,
    date: movie.Year,
    type: movie.Type
  }))
  return { movies: mappedMovies }
}
