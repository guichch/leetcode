/* 
  238：除自身以外数组的乘积
  时间复杂度O(n), 空间复杂度O(1)
  对于给定索引i，用它左边所有数字的乘积乘以它右边所有数字的乘积，即可得到答案
*/

function productExceptSelf(nums: number[]): number[] {
  const res = new Array<number> (nums.length)
  res[0] = 1
  for (let i = 1; i < nums.length; i++) {
    res[i] = res[i - 1] * nums[i - 1]
  }
  let R = 1
  for (let j = nums.length - 1; j >= 0; j--) {
    res[j] = res[j] * R
    R = R * nums[j]
  }

  return res
}