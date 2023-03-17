import './App.css'
import { getNewFact } from './logic/getNewFact.js'
import { useCustomFact } from './hooks/useCustomFact.js'
import { useImageCatFact } from './hooks/useImageCatFact.js'

const prefixUrl = 'https://cataas.com/'

export function App () {
  const { fact, setFact } = useCustomFact()
  const { imageUrl } = useImageCatFact({ fact })

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
          {imageUrl &&
            <img
              className='img-cat'
              src={`${prefixUrl}${imageUrl}`}
              alt={`random cat image with ${fact}`}
            />}
        </section>
      </article>
    </main>
  )
}
