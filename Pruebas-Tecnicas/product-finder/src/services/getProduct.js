const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd3fb4a63cemsh35fef10d4310ae9p1f0968jsn777c32086b52',
    'X-RapidAPI-Host': 'amazon23.p.rapidapi.com'
  }
}

export const getProduct = ({ search }) => {
  if (search === '') return null

  return fetch(`https://amazon23.p.rapidapi.com/product-search?query=${search}&country=US`, options)
    .then(response => response.json())
    .then(data => {
      const { result } = data
      return result?.map(game => ({
        id: game.asin,
        title: game.title,
        image: game.thumbnail
      }))
    })
    .catch(err => console.error(err))
}
