import { TURNS } from '../constants.js'
import { useState} from 'react'
const Square = ({children}) => {
  return (
    <div className="square">
      {children}
    </div>
  )
}

export function Part3 () {
  const [board, setBoard] = useState(Array(9).fill(null))
  return (
    <section className="board">
      <div className="game">
        {
          board.map((square, index) => (
            <Square> {index}</Square>
          ))
        }
      </div>
    </section>
  )
}
