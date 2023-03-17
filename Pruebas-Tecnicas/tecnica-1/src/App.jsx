import './styles/App.css'
import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'

const prefixImageUrl = 'https://cataas.com'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
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
