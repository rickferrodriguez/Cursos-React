import { WINNER_COMBOS } from "../constants.js"
export const checkWinnerFrom = (boardToCheck) => {
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

export const checkEndGame = (newBoard) => {
  // revisamos si hay un empate
  // si no hay más espacios vacíos
  // en el tablero
  return newBoard.every((square) => square !== null)
}
