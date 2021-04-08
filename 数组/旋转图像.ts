/* 
  48：旋转图像
  将二维矩阵顺时针旋转90度，要求空间复杂度为O(1)
  法1：先通过水平轴翻转，在沿对角线翻转即可
  法2：旋转前第一行位于反转后最后一列，依次类推。
  原来下标为(row, col)的元素，旋转后下标为(col, matrix[0].length - 1 - row)
  原来下标为(col, matrix[0].length - 1 - row)的元素，旋转后下标为(matrix[0].length - 1 - row, matrix[0].length - 1 - col)
  原来下标为(matrix[0].length - 1 - row, matrix[0].length - 1 - col)的元素，旋转后下标为(matrix[0].length - 1 - col, row)
  原来下标为(matrix[0].length - 1 - col, row)的元素，旋转后下标为(row, col)
*/

function rotate2(matrix: number[][]): number[][] {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = row; col < matrix[0].length - row - 1; col++) {
      [
        matrix[row][col],
        matrix[col][matrix[0].length - 1 - row],
        matrix[matrix[0].length - 1 - row][matrix[0].length - 1 - col],
        matrix[matrix[0].length - 1 - col][row]
      ] = [
        matrix[matrix[0].length - 1 - col][row],
        matrix[row][col],
        matrix[col][matrix[0].length - 1 - row],
        matrix[matrix[0].length - 1 - row][matrix[0].length - 1 - col]
      ]
    }
  }
  return matrix
}