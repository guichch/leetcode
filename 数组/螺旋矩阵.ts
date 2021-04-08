/* 
  54：螺旋矩阵，顺时针遍历二维数组
  59：螺旋矩阵2，给定一个数字n，顺时针生成一个n维方针
*/

function spiralOrder(nums: number[][]): number[] {
  const res = []
  let left = 0, top = 0, right = nums[0].length - 1, bottom = nums.length - 1
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      res.push(nums[top][i])
    }
    for (let i = top + 1; i <= bottom; i++) {
      res.push(nums[i][right])
    }
    if (left < right && top < bottom) {
      for (let i = right - 1; i > left; i--) {
        res.push(nums[bottom][i])
      }
      for (let i = bottom; i > top; i--) {
        res.push(nums[i][top])
      }
    }

    top++, left++, right--, bottom--
  }
  return res
}


function spiralOrder2(num: number): number[][] {
  const res = []
  for (let i = 0; i < num; i++) {
    res.push(new Array(num))
  }
  let j = 1
  let left = 0, right = num - 1, top = 0, bottom = num - 1
  while(left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      res[top][i] = j++
    }
    for(let i = top + 1; i <= bottom; i++) {
      res[i][right] = j++
    }
    if (left < right && top < bottom) {
      for (let i = right - 1; i > left; i--) {
        res[bottom][i] = j++
      }
      for (let i = bottom; i > top; i--) {
        res[i][left] = j++
      }
    }
    top++, left++, right--, bottom--
  }
  return res
}