export const saveGameToStorage = ({board, turn}) => {
    // guardar aquí la partida
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
}

export const resetGameStorage = () => {
  // borrar del local storage
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}
