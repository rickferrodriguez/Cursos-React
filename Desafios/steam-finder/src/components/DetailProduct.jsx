import { useState } from 'react'
import { getDetailGame } from '../services/getDetailGame'

export function DetailProduct ({ id }) {
  const [detail, setDetail] = useState({})

  const newDetail = getDetailGame(id).then()
  setDetail(newDetail)
  return (
    <article>
      <h2>{detail.title}</h2>
    </article>
  )
}
