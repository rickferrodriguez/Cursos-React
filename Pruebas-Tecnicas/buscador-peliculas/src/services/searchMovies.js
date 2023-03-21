const PELI_ENDPOINT = 'http://www.omdbapi.com/?apikey=5a03f14a'

export const searchMovies = async ({ search }) => {
  if (search === '') return null

  try {
    const response = await fetch(`${PELI_ENDPOINT}&s=${search}`)
    const json = await response.json()

    const movies = json.Search

    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      type: movie.Type,
      poster: movie.Poster
    }))
  } catch (e) {
    throw new Error('Error searching movies')
  }
}
