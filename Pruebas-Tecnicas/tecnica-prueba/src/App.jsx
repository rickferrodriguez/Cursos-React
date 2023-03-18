import './App.css'
import { useCustomFact } from './hooks/useCustomFact.js'
import { useImageCatFact } from './hooks/useImageCatFact.js'

export function App () {
  const { fact, refreshFact } = useCustomFact()
  const { imageUrl } = useImageCatFact({ fact })

  const handleClick = async () => {
    refreshFact()
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
              src={`${imageUrl}`}
              alt={`random cat image with ${fact}`}
            />}
        </section>
      </article>
    </main>
  )
}
