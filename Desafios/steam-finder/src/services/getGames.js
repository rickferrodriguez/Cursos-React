const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd3fb4a63cemsh35fef10d4310ae9p1f0968jsn777c32086b52',
    'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
  }
}

export function getGames (search) {
  return fetch(`https://steam2.p.rapidapi.com/search/${search}/page/1`, options)
    .then(response => response.json())
    .then(data => {
      const noUndefinedGames = data.filter(game => game.appId !== undefined)
      return noUndefinedGames?.map(game => ({
        id: game.appId,
        title: game.title,
        image: game.imgUrl,
        url: game.url,
        price: game.price
      }))
    })
    .catch(err => console.error(err))
}
