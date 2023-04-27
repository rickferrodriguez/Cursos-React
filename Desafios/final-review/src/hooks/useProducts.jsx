import { products as initialproducts } from '../mocks/withResults.json'

export function useProducts () {
  const mappedProducts = initialproducts.map(product => ({
    id: product.id,
    title: product.title,
    image: product.thumbnail,
    price: product.price
  }))

  return { mappedProducts }
}
