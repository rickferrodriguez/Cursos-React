import { useEffect, useState } from 'react'

const CAT_API_FACT = 'https://catfact.ninja/fact'
const prefixImageUrl = 'https://cataas.com'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_API_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  useEffect(() => {
    if (!fact) return

    const firstThreeWords = fact.split(' ').slice(0, 3).join(' ')
    console.log(firstThreeWords)

    fetch(`https://cataas.com/cat/says/${firstThreeWords}?size=50&color=red&json=true`)
      .then(response => response.json())
      .then(dat => {
        const { url } = dat
        setImageUrl(url)
      })
  }, [fact])

  return (
    <main>
      <h1>Api de Gatos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${prefixImageUrl}${imageUrl}`} alt={`Random cat image based on ${fact}`} />}
    </main>
  )
}
