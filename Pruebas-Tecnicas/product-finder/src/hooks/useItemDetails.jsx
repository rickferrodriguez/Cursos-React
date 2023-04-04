const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd3fb4a63cemsh35fef10d4310ae9p1f0968jsn777c32086b52',
    'X-RapidAPI-Host': 'aliexpress-datahub.p.rapidapi.com'
  }
}

const ITEM_DETAIL_PREFIX = 'https://aliexpress-datahub.p.rapidapi.com/item_detail'

export function useItemDetails () {
  const getItemDetails = (product) => {
    if (product === null || product === undefined) return

    return fetch(`${ITEM_DETAIL_PREFIX}?itemId=${product.id}`, options)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        return data
      })
  }

  return { getItemDetails }
}
