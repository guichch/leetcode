/* 
  442：找到数组中所有重复两次的元素
  思路还是在原数组上修改，可以使空间复杂度为1
*/

function findDuplicates(nums: number[]): number[] {
  const res = []
  nums.forEach(element => {
    if (element > nums.length) element = element % nums.length == 0 ? nums.length : element % nums.length
    nums[element - 1] += nums.length
  })
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 2 * nums.length) res.push(i + 1)
  }
  return res
}