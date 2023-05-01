import { useState } from 'react'

export function useProducts ({ search }) {
  const [responseProducts, setResponseProducts] = useState('')

  const products = responseProducts.products
  const mappedProducts = products.map(product => ({
    id: product.id,
    title: product.title,
    image: product.thumbnail,
    price: product.price
  }))

  const getProducts = () => {
    if (search) {
      setResponseProducts(mappedProducts)
    } else {
      setResponseProducts([])
    }
  }

  return { products: mappedProducts, getProducts }
}
