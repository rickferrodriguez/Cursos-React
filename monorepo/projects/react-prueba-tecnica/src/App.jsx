import { useEffect, useState } from 'react'
import { getRandomFact } from './services/facts.js'

// const CAT_ENDPONIT_IMAGE_URL = `https://cataas.com/cat/says/${message}?size=50&color=red&json=true`
const CAT_PREFIX_URL = 'https://cataas.com'

export function App () {
  const [fact, setFact] = useState()
  const [imgUrl, setImgUrl] = useState()

  // recuperar la cita al cargar la página
  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
  }, [])

  // para cargar la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return
    // first three words study join, slice, split
    // const threeWords = fact.split(' ').slice(0, 3).join(' ')
    const threeFirstWords = fact.split(' ', 3).join(' ')

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImgUrl(url)
      })
  }, [fact])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new Fact</button>
      <article className='card-cat'>
        <p>{fact}</p>
        {imgUrl && <img className='img-card' src={`${CAT_PREFIX_URL}${imgUrl}`} alt={`Image extracted using the first rhee words for ${fact}`} />}
      </article>
    </main>
  )
}
