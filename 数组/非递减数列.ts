/* 
  665：非递减数列
  有两种情况：第一种是上一元素需要修改，如[1, 4, 2, 3]
  第二种是当前元素需要修改，如[2, 7, 1, 8]
*/

function cheekPosibility(nums: number[]): boolean {
  let num = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] >= nums[i - 1]) continue
    if (++num > 1) return false
    if (i !== 1 && nums[i] < nums[i - 2]) nums[i] = nums[i - 1]
  }
  return true
}