/* 
  396：旋转函数
  这道题的关键在于F(n) = F(n - 1) + sum - nums.length * nums[nums.length - 1]
*/

function maxRotateFunction(nums: number[]): number {
  let F = 0, sum = 0
  for (let i = 0; i < nums.length; i++) {
    F += i * nums[i]
    sum += nums[i]
  }
  let max = F
  console.log(max, sum)
  for (let i = 1; i < nums.length; i++) {
    const last = nums[nums.length - i]
    F = F + sum - nums.length * last
    max = max > F ? max : F
    console.log(max)
  }
  return max
}