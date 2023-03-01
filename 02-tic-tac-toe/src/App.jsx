import {useState} from 'react'
import './App.css'

const TURNS = {
  X:'x',
  O:'o'
}


const Square = ({ children,isSelected, updateBoard, index}) => {
  const className = `square ${isSelected ? 'is-selected':''}`

  const handleClick = () => {
    updateBoard(index)
  }
  return (
  <div onClick={handleClick} className={className}>
      {children}
  </div>
  )
}

export const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)
  // null es que no hay ganador, false es que hay un empate
  const [winner, setWiner] = useState(null)

  const checkWinner = (boardToCheck) => {
    // revisamos combinaciones ganadoras
    // para ver si x u o ganó
    for (const combo of WINNER_COMBOS){
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

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWiner(null)
  }

  const checkEndGame = (newBoard) => {
    // revisamos si hay un empate
    // si no hay más espacios vacíos
    // en el tablero
    return newBoard.every((square) => square !== null)
  }

  const updateBoard = (index) => {
    // no actualizamos esta posición
    // si ya tiene algo o existe un ganador (winner)
    if (board[index] || winner) return
    // actualizar el tablero
    const newBoard = [... board]
    newBoard[index] = turn
    setBoard(newBoard)
    // cambiar el turno
    const  newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    //revisar si hay un ganador
    const newWinner = checkWinner(newBoard)
    if(newWinner) {
      setWiner(newWinner)
    } else if(checkEndGame(newBoard)){
      setWiner(false)
    }
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button type="" onClick={resetGame}>Reset del Juego</button>
      <section className="game">
        {
          board.map((square, index) => {
            return (
              <Square 
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      {
        winner !== null && (
          <section className='winner'>
            <div className='text'>
              <h2>
                {
                  winner === false
                    ? 'Empate'
                    : 'Ganó:'
                }
              </h2>

              <header className='win'>
                {winner && <Square>{winner}</Square>}
              </header>

              <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
        )
      }
    </main>
  )
}

export default App
