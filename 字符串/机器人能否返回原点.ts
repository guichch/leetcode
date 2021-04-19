/* 
  657、机器人能否返回原点
*/

function judgeCircle(moves: string): boolean {
  if (!moves.length) return true
  if (moves.length == 1) return false
  const position = [0, 0]
  for (let item of moves) {
    item == 'R' ? position[0]++ : item == 'L' ? position[0]-- : item == 'U' ? position[1]++ : position[1]--
  }
  return !(position[0] || position[1])
};