import { useEffect, useState } from 'react'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return

    const firstThreeWords = fact.split(' ').slice(0, 3).join(' ')

    fetch(`https://cataas.com/cat/says/${firstThreeWords}?size=50&color=red&json=true`)
      .then(response => response.json())
      .then(dat => {
        const { url } = dat
        setImageUrl(url)
      })
  }, [fact])
  return { imageUrl }
}
