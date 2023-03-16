import { useEffect, useState } from 'react'

const CAT_API_FACT = 'https://catfact.ninja/fact'
const prefixImageUrl = 'https://cataas.com'

export function App () {
  const [fact, setFact] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    fetch(CAT_API_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        const threeWords = fact.split(' ', 3).join(' ')

        fetch(`https://cataas.com/cat/says/${threeWords}?size=50&color=red&json=true`)
          .then(response => response.json())
          .then(dat => {
            const { url } = dat
            setImageUrl(url)
          })
      })
  }, [])

  return (
    <main>
      <h1>App de gatitos</h1>
      <p>{fact}</p>
      <img src={`${prefixImageUrl}${imageUrl}`} alt='' />
    </main>
  )
}
