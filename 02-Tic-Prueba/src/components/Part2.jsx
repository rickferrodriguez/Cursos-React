import { useState } from 'react'
import { TURNS, WINNER_COMBOS} from '../constants.js'


const Square = ({index,updateBoard, isSelected, children}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const handleClick = () => {
    updateBoard(index)
  }
  return (
    <div 
      onClick={handleClick}
      className={className}
    >
      {children}
    </div>
  )
}

export function Part2 () {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurns] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const updateWinner = (boardToCheck) => {
    for(const combo of WINNER_COMBOS){
      const [a,b,c] = combo
      if(
        boardToCheck[a] &&
          boardToCheck[a] === boardToCheck[b] &&
          boardToCheck[a] === boardToCheck[c]
      ){
        return boardToCheck[a]
      }
    }
    return null
  }

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
  }

  const updateBoard = (index) => {
    if(board[index] !== null || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurns(newTurn)

    // debemos usar el 'newboard' porque si usamos el 'board' no se va 
    // a actualizar el ultimo turno y podremos hacer un movimiento mas
    const newWinner = updateWinner(newBoard)
    if(newWinner){
      setWinner(newWinner)
    } else if( checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  const resetGame = () => {
    setWinner(null)
    setBoard(Array(9).fill(null))
    setTurns(TURNS.X)
  }


  return (
  <article className="board divisiones">
      <h3>part2</h3>
      <section className="game">
        {
          board.map((square, index) => (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {square}
            </Square>
          ))
        }
      </section>
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
                    ? "empate"
                    : "Ganó"
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
  </article>
  )
}
