const PREFIX_MOVIES = 'https://www.omdbapi.com/?apikey=5a03f14a'

export async function searchMovies ({ search }) {
  if (search === '') return null

  try {
    const response = await fetch(`${PREFIX_MOVIES}&s=${search}`)
    const json = await response.json()

    const movies = json.Search
    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      type: movie.Type,
      poster: movie.Poster
    }))
  } catch (err) {
    throw new Error('Error searching movies')
  }
}
