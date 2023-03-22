const PREFIX_MOVIES = 'https://www.omdbapi.com/?apikey=5a03f14a'

export async function getMovies ({ search }) {
  if (search === '') return null

  try {
    const response = await fetch(`${PREFIX_MOVIES}&s=${search}`)
    const json = await response.json()

    const movies = json.Search

    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
      type: movie.Type
    }))
  } catch (e) {
    throw new Error('Failed to get Movies')
  }
}
