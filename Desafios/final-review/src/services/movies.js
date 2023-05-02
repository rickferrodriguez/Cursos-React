
export async function searchMovies (search) {
  if (search === '') return null

  try {
    const response = await fetch(`http://www.omdbapi.com/?apikey=5a03f14a&s=${search}`)
    const json = await response.json()
    const { Search } = json
    return Search?.map(movie => ({
      title: movie.Title,
      image: movie.Poster,
      type: movie.Type,
      year: movie.Year,
      id: movie.imdbID
    }))
  } catch (error) {
    throw new Error('Error search movies')
  }
}
