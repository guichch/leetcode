/* 
  566：重塑数组
*/

function matrixReshape(nums: number[][], r: number, c: number): number[][] {
  if (!nums.length || nums.length * nums[0].length !== r * c) return nums
  const res = new Array(r)
  for (let i = 0; i < r; i++) {
    res[i] = new Array(c)
  }
  let i = 0, j = 0
  for (let row = 0; row < nums.length; row++) {
    for (let column = 0; column < nums[0].length; column++) {
      if (j === c) {
        i++, j = 0
      }
      res[i][j++] = nums[row][column]
    }
  }
  return res
}

console.log(matrixReshape([[1,2],[3,4]]
  ,4
  ,1)
)
