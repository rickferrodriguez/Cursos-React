const PREFIX_MOVIES = 'http://www.omdbapi.com/?apikey=5a03f14a'

export const getMovies = async ({ search }) => {
  if (search === '') return null

  try {
    const response = await fetch(`${PREFIX_MOVIES}&s=${search}`)
    const json = await response.json()
    const movies = json.Search
    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      poster: movie.Poster,
      year: movie.Year,
      type: movie.Type
    }))
  } catch (error) {
    throw new Error('Error searching movies')
  }
}
