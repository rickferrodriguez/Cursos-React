const CAT_API_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  return fetch(CAT_API_FACT)
    .then(res => res.json())
    .then(data => {
      const { fact } = data
      return fact
    })
}
