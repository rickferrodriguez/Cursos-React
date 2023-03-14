export const saveGameToStorage = ({ turn, board }) => {
  window.localStorage.setItem('turn', turn)
  window.localStorage.setItem('board', JSON.stringify(board))
}
