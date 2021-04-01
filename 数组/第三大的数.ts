/* 
  返回一个非空数组中第三大的数，如果不存在则返回最大的数
*/

function thirdMax(nums: number[]): number {
  const arr = [...new Set(nums)]
  if (arr.length == 1) {
    return arr[0]
  }
  if (arr.length == 2) {
    return arr[0] > arr[1] ? arr[0] : arr[1]
  }
  let [first, second, third] = [-Infinity, -Infinity, -Infinity]
  for (let item of arr) {
    if (item > first) { 
      [first, second, third] = [item, first, second]
    } else if (item > second) {
      [second, third] = [item, second]
    } else if (item > third) {
      third = item
    }
  }
  if (third == -Infinity) return first
  return third

}

