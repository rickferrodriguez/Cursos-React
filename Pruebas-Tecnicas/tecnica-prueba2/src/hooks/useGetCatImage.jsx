import { useState, useEffect } from 'react'

const PREFIX_URL = 'https://cataas.com/'

export const useGetCatImage = ({ fact }) => {
  const [urlImage, setUrlImage] = useState()

  useEffect(() => {
    if (!fact) return

    const firstThreeWords = fact.split(' ').slice(0, 3).join(' ')

    fetch(`https://cataas.com/cat/says/${firstThreeWords}?json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setUrlImage(url)
      })
  }, [fact])

  return { urlImage: `${PREFIX_URL}${urlImage}` }
}
