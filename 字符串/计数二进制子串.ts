/* 
  696、计数二进制子串
   1、由字符串生成一个新的数组，这个数组里每个元素代表原字符串中连续0或连续1的个数
   2、数组中相邻的两个数m, n对结果的贡献为min(m ,n)
*/

function countBinarySubstrings(s: string): number {
  if (s.length == 1) return 0
  let res = 0
  const arr = []
  let count = 1
  for (let i = 1; i < s.length; i++) {
    if (s[i] == s[i - 1]) {
      count++
      if (i == s.length - 1) arr.push(count)
      continue
    }
    arr.push(count)
    count = 1
    if (i == s.length - 1) arr.push(count)
  }
  for (let i = 1; i < arr.length; i++) {
    res += Math.min(arr[i - 1], arr[i])
  }
  return res
};

console.log(countBinarySubstrings("000111000"))