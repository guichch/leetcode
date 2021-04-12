/* 
  73：矩阵置零：要求空间复杂度为O(1)
  O(mn)空间复杂度：一个新矩阵记录即可
  O(m + n)空间复杂度：两个数组记录原矩阵中出现0的位置
  O(1)：由原矩阵的第一行和第一列代替新生成数组，在代替之前先打两个标记，看原矩阵第一行和第一列中是否有0
*/

function setZeroes(matrix: number[][]): number[][] {
  const m = matrix.length, n = matrix[0].length
  let row0 = false, col0 = false
  for (let i = 0; i < n; i++) {
    if (!matrix[0][i]) {
      row0 = true
      break
    }
  }
  for (let j = 0; j < m; j++) {
    if (!matrix[j][0]) {
      col0 = true
      break
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (!matrix[i][j]) {
        matrix[0][j] = matrix[i][0] = 0
      }
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (!matrix[0][j] || !matrix[i][0]) {
        matrix[i][j] = 0
      }
    }
  }

  if (row0) {
    for (let i = 0; i < n; i++) {
      matrix[0][i] = 0
    }
  }

  if (col0) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0
    }
  }
  return matrix
}

console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]))