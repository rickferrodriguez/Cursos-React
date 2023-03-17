const API_CAT_FACT = 'https://catfact.ninja/fact'

export const getNewFact = async () => {
  return fetch(API_CAT_FACT)
    .then(res => res.json())
    .then(data => {
      const { fact } = data
      return fact
    })
}
