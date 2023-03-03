import {useState} from 'react'
import './App.css'

const TURNS = {
  X:'x',
  O:'o'
}

const Square = ({index,updateBoard, isSelected, children}) => {
  const className = `square ${isSelected ? 'is-selected': ''}`

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

function App() {

  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)

  const updateBoard = (index) => {
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
  }

  return (
    <main className="board">
      <section className="game">
        {
          board.map((bo, index) => (
            <Square 
              key={index}
              index={index}
              updateBoard = {updateBoard}
            >
              {bo}
            </Square>
          ))
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
    </main>
  )
}

export default App
