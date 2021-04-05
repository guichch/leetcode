/* 
  41：缺失的第一个正数，时间复杂度n，空间复杂度1
  先将小于等于0的数全部变为n + 1，然后打标记，最后遍历打标记后的数组。
*/

function firstMissingPositive(nums: number[]) {
  nums.forEach((element, index) => {
    if (element <= 0) nums[index] = nums.length + 1
  })
  for (let i = 0; i < nums.length; i++) {
    if (Math.abs(nums[i]) <= nums.length) {
      nums[Math.abs(nums[i]) - 1] = -Math.abs(nums[Math.abs(nums[i]) - 1])
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) return i + 1
  }
  return nums.length + 1
}