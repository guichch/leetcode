/* 
  434、字符串中的单词数
*/

function countSegments(s: string): number {
  if (!s.length) return 0
  let res = 0
  const reg = /\s/
  let flag = false
  for (let item of s) {
    if (!flag && !reg.test(item)) {
      res++
      flag = true
    }
    if (flag && reg.test(item)) {
      flag = false
    }
  }
  return res
};