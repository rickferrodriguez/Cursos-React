import withResults from '../mocks/withResults.json'

export function useGetProducts () {
  const mappedGames = withResults?.map(game => ({
    id: game.appId,
    title: game.title,
    image: game.imgUrl,
    url: game.url,
    price: game.price
  }))
  return { mappedGames }
}
