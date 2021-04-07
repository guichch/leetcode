/* 
  448：找到所有数组中消失的数字。在原数组中修改可使空间复杂度为1
*/

function findDisappearedNumbers(nums: number[]): number[] {
  const res = []
  nums.forEach(element => {
    if (element > nums.length) element = element % nums.length == 0 ? nums.length : element % nums.length    
    nums[element - 1] += nums.length
  })
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= nums.length) res.push(i + 1)
  }
  return res
}