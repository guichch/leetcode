/* 
  289：生命游戏，要求空间复杂度为O(1)
  原理很简单，自定义状态，来表示该细胞目前是状态和原来的状态
  -1表示该细胞目前是死的，原来是活的
  0表示该细胞目前是死的，原来也是死的
  1表示该细胞目前是活的，原来也是活的
  2表示该细胞目前是活的，原来是死的
*/

function gameOfLife(board: number[][]): number[][] {
  const row = board.length, col = board[0].length
  return board
}