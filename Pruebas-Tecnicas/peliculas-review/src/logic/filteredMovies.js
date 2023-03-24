export function filteredMovies ({ movies, sort, onlyMovies }) {
  if (movies === undefined) return

  const sortedMovies = [...movies]?.sort((a, b) => a.title.localeCompare(b.title))
  if (sort === true && onlyMovies === true) {
    return [...sortedMovies].filter(movie => movie.type === 'movie')
  }

  if (sort) {
    return sortedMovies
  }

  if (onlyMovies) {
    return [...movies].filter(movie => movie.type === 'movie')
  }

  return movies
}
