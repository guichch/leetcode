/* 
  274：h指数，h指数指的是一个数组中有h个数大于等于h
  1、排序，然后比较
  2、引用计数，我是公司电脑上修改的内容
*/

function hIndex(nums: number[]): number {
  let h = 0
  nums.sort((a, b) => {
    return b - a
  });
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > i) {
      h++
    } else {
      return h
    }
  }
  return h
}
