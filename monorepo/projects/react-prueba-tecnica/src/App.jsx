import {useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_ENDPONIT_IMAGE_URL = `https://cataas.com/cat/says/${message}?size=50&color=red&json=true`

export function App () {
  const [fact, setFact] = useState('lorem')

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
    .then(res => res.json())
    .then(data => setFact(data.fetch))
  }, [])

  return (
    <main>
      <h1>App de gatitos</h1>
      <p>{fact}</p>
    </main>
  )
}
