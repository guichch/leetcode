/* 
  283：移动0，将数组中所有的0移动到到最后，其余元素顺序不变
*/

function moveZeros(nums: number[]): number[] {
  let index = 0
  for (let item of nums) {
    if (item !== 0) nums[index++] = item
  }
  return nums.fill(0, index)
}