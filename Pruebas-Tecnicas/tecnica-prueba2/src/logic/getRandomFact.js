const ENDPOINT_CAT_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  return fetch(ENDPOINT_CAT_FACT)
    .then(res => res.json())
    .then(data => {
      const { fact } = data
      return fact
    })
}
