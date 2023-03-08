import { TURNS, WINNER_COMBOS } from '../constants.js'
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
  const [winner, setWinner] = useState(null)

  const updateWinner = (boardToCheck) => {
    for(const combo of WINNER_COMBOS) {
      const [a,b,c] = combo
      if(
        boardToCheck[a] &&
          boardToCheck[a] === boardToCheck[b] &&
          boardToCheck[a] === boardToCheck[c] 
      ){
        return boardToCheck[a]
      }
    }
    return false
  }

  const checkWinner = (array) => {
    return array.every(square => square !== null)
  }

  const updateTurn = (index) => {
    if(board[index] || winner !== null) return

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newWinner = updateWinner(newBoard)
    if(newWinner) {
      setWinner(newWinner)
    } else if(checkWinner(newBoard)){
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
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
      {
        winner !== null && (
        <section className="winner">
            <div className="text">
              <h2>
                {
                  winner === false
                    ? 'Empate' 
                    : 'Ganó' 
                }
              </h2>
              <header className="win">
                {winner && <Square>{winner}</Square>}
              </header>
              <footer>
                <button onClick={resetGame}>Reset Game</button>
              </footer>
            </div>
          </section>
        )
      }
    </section>
  )
}
