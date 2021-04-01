/* 
  一个数组中包含1-n，n个数字，其中有一个是重复的，一个是缺失的，返回这两个数字
*/

function findErrorNums(nums: number[]): number[] { 
  let double: number
  let missing: number
  let arr = new Array(nums.length)
  for (let item of nums) {
    if (!arr[item - 1]) {
      arr[item - 1] = 1;
      continue
    }
    double = item
  }
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) {
      missing = i + 1
      break
    }
  }

  return [double, missing]
};