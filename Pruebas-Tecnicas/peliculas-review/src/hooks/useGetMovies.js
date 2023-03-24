import withResults from '../mocks/withResults.json'

export const useGetMovies = () => {
  const movies = withResults.Search
  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    poster: movie.Poster,
    year: movie.Year,
    type: movie.Type
  }))
  return { mappedMovies }
}
