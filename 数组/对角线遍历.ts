/* 
  498：对角线遍历二维数组
*/

function findDiagonalOrder(matrix: number[][]): number[] {
  if (!matrix.length) return []
  if (matrix.length == 1) return matrix[0]
  let direction = false
  let res = [matrix[0][0]]
  let row = -1, column = 1
  for (let i = 1; i < matrix.length * matrix[0].length; i++) {
    if (direction) {
      if (column == -1 && row !== matrix.length) {
        column++
        while (row >= 0 && column < matrix[0].length) {
          res.push(matrix[row][column])
          row--, column++
        }
        direction = false
      } else {
        column += 2, row--
        while (row >= 0 && column < matrix[0].length) {
          res.push(matrix[row][column])
          row--, column++
        }
        direction = false
      }

    } else {
      if (row == -1 && column !== matrix[0].length) {
        row = 0
        while (column >= 0 && row < matrix.length) {
          res.push(matrix[row][column])
          row++, column--
        }
        direction = true
      } else {
        row += 2, column--
        while (column >= 0 && row < matrix.length) {
          res.push(matrix[row][column])
          row++, column--
        }
        direction = true
      }
    }
  }
  return res
}

console.log(findDiagonalOrder([[2,5],[8,4],[0,-1]]))