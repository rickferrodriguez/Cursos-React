import { useEffect, useState } from 'react'
import './styles/App.css'
import { getRandomFact } from './services/facts.js'

const prefixImageUrl = 'https://cataas.com'

function useCatImage ({ fact }) {
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

export function App () {
  const [fact, setFact] = useState()
  const { imageUrl } = useCatImage({ fact })

  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
  }, [])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main>
      <article className='card-cat'>
        <h1>Api de Gatos</h1>
        <button onClick={handleClick}>Get new Fact</button>
        <section className='flex-card-group'>
          {fact && <p>{fact}</p>}
          {imageUrl && <img className='cat-img' src={`${prefixImageUrl}${imageUrl}`} alt={`Random cat image based on ${fact}`} />}
        </section>
      </article>
    </main>
  )
}
