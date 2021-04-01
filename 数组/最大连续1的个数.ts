function findMaxConsecutiveOnes(nums: number[]): number {
  let max = 0
  let current = 0
  for (let item of nums) {
    if (item == 1) {
      current++; 
      continue
    }
    max = max > current ? max : current
    current = 0
  }
  
  return max > current ? max : current
}