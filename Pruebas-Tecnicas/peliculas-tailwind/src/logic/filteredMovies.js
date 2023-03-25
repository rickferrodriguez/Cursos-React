export function filteredMovies ({ sort, movies, onlyMovies, series }) {
  if (movies === undefined) return

  const sortedMovies = [...movies].sort((a, b) => a.title.localeCompare(b.title))
  if (sort === true && onlyMovies === true) {
    return sortedMovies.filter(movie => movie.type === 'movie')
  }

  if (sort === true && series === true) {
    return sortedMovies.filter(movie => movie.type === 'series')
  }

  if (sort) {
    return sortedMovies
  }

  if (onlyMovies) {
    return [...movies].filter(movie => movie.type === 'movie')
  }

  if (series) {
    return [...movies].filter(movie => movie.type === 'series')
  }

  return movies
}
