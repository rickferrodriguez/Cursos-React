import { TURNS } from '../constants.js'
import { useState} from 'react'
const Square = ({children, index, isSelected, updateTurn}) => {
  const className = `square ${isSelected ? 'is-selected': ''}`
  const handleClick = () => {
    updateTurn(index)
  }
  return (
    <div 
      onClick={handleClick}
      className={className}>
      {children}
    </div>
  )
}

export function Part3 () {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)

  const updateTurn = (index) => {
    if(board[index]) return

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
  }
  return (
    <section className="board">
      <div className="game">
        {
          board.map((square, index) => (
            <Square 
              key={index}
              index={index}
              updateTurn={updateTurn}
            > 
              {square}
            </Square>
          ))
        }
      </div>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
    </section>
  )
}
