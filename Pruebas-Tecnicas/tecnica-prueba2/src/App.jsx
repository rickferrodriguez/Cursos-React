import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './logic/getRandomFact.js'

const PREFIX_URL = 'https://cataas.com/'

export function App () {
  const [fact, setFact] = useState()
  const [urlImage, setUrlImage] = useState()

  useEffect(() => {
    getRandomFact().then(res => setFact(res))
  }, [])

  useEffect(() => {
    if (!fact) return

    const firstThreeWords = fact.split(' ').slice(0, 3).join(' ')
    console.log(firstThreeWords)

    fetch(`https://cataas.com/cat/says/${firstThreeWords}?json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setUrlImage(url)
      })
  }, [fact])

  const handleClick = () => {
    getRandomFact().then(res => setFact(res))
  }

  return (
    <main>
      <article className='cat-card'>
        <h1>Api de gatos</h1>
        <button onClick={handleClick}>Get random Fact</button>
        <section className='flex-group'>
          {fact &&
            <p
              className='fact-text'
            >{fact}
            </p>}
          {urlImage &&
            <img
              className='cat-img'
              src={`${PREFIX_URL}${urlImage}`}
              alt={`random cat image with the fact that: ${fact}`}
            />}
        </section>
      </article>
    </main>
  )
}
