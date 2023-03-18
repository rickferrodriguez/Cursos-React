import './App.css'
import { useGetRandomFact } from './hooks/useGetRandomFact.jsx'
import { useGetCatImage } from './hooks/useGetCatImage.jsx'

export function App () {
  const { fact, setFactState } = useGetRandomFact()
  const { urlImage } = useGetCatImage({ fact })

  const handleClick = () => {
    setFactState()
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
              src={urlImage}
              alt={`random cat image with the fact that: ${fact}`}
            />}
        </section>
      </article>
    </main>
  )
}
