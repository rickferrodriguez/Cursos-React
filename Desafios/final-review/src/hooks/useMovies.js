import responseMovies from '../mocks/withResults.json'

export function useMovies ({ search }) {
  const movies = responseMovies.Search
  const mappedMovies = movies.map(movie => ({
    title: movie.Title,
    image: movie.Poster,
    type: movie.Type,
    year: movie.Year,
    id: movie.imdbID
  }))

  const moviesResults = () => {
    if (search)
  }

  return { mappedMovies }
}
