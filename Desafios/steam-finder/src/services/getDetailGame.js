const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd3fb4a63cemsh35fef10d4310ae9p1f0968jsn777c32086b52',
    'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
  }
}

export function getDetailGame ({ id }) {
  if (id === undefined) return

  return fetch(`https://steam2.p.rapidapi.com/appDetail/${id}`, options)
    .then(res => res.json())
    .then(data => {
      return data
    })
}
