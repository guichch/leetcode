/* 
  返回一个整型数组中三个数的最大乘积
*/

function maximumProduct(nums: Array<number>): number {
  let [max1, max2, max3] = [-Infinity, -Infinity, -Infinity]
  let [min1, min2] = [Infinity, Infinity]
  for (let item of nums) {    
    if (item < min1) {
      [min1, min2] = [item, min1]
    } else if (item < min2) {
      min2 = item
    }
    if (item > max1) {
      [max1, max2, max3] = [item, max1, max2]
    } else if (item > max2) {
      [max2, max3] = [item, max2]
    } else if (item > max3) {
      max3 = item
    }

  }
  return Math.max(max1 * max2 * max3, max1 * min1 * min2)
};