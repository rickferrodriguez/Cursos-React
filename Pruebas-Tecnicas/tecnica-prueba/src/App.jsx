import { useEffect, useState } from 'react'
import './App.css'
import { getNewFact } from './logic/getNewFact.js'

const prefixUrl = 'https://cataas.com/'

const useCustomFact = () => {
  const [fact, setFact] = useState()

  useEffect(() => {
    getNewFact().then(newFact => setFact(newFact))
  }, [])
  return { fact, setFact }
}

export function App () {
  const { fact, setFact } = useCustomFact()
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

  const handleClick = async () => {
    const newFact = await getNewFact()
    setFact(newFact)
  }

  return (
    <main>
      <article className='cat-card'>
        <h1>Api de gatos</h1>
        <button onClick={handleClick}>Get new Fact</button>
        <section className='card-group'>
          {fact && <p>{fact}</p>}
          {imageUrl && <img className='img-cat' src={`${prefixUrl}${imageUrl}`} alt='' />}
        </section>
      </article>
    </main>
  )
}
