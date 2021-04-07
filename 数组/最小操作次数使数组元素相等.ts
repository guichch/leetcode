/* 
  453：最小操作次数使数组元素相等
  除最大元素外所有元素加1，相当于最大元素减一
*/

function minMoves(nums: number[]): number {
  const min = Math.min.apply(null, nums)
  let move = 0
  for (let item of nums) {
    move += item - min
  }
  return move
}