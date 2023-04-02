const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd3fb4a63cemsh35fef10d4310ae9p1f0968jsn777c32086b52',
    'X-RapidAPI-Host': 'aliexpress-datahub.p.rapidapi.com'
  }
}

export const getProduct = ({ search }) => {
  if (search === '') return null

  return fetch(`https://aliexpress-datahub.p.rapidapi.com/item_search?q=${search}&page=1`, options)
    .then(response => response.json())
    .then(data => {
      const { result } = data
      const resultList = getResultList({ result })
      const item = getItem(resultList)
      return item
    })
    .catch(err => console.error(err))
}

function getResultList ({ result }) {
  let resultItems = []
  Object.entries(result).map(entry => {
    const [key, value] = entry
    if (key === 'resultList') {
      resultItems = value
    }

    return resultItems
  })

  return resultItems
}

function getItem (resultList) {
  return resultList.map(res => {
    const { item } = res
    return {
      id: item.itemId,
      title: item.title,
      image: item.image
    }
  })
}
