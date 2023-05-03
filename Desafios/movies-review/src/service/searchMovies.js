
export async function searchMovies ({ search }) {
  if (search === '') return
  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=5a03f14a&s=${search}`)
    const json = await response.json()
    const movies = json.Search
    return movies?.map(movie => ({
      title: movie.Title,
      image: movie.Poster,
      type: movie.Type,
      id: movie.imdbID,
      year: movie.Year
    }))
  } catch (error) {
    throw new Error('Title not found')
  }
}
