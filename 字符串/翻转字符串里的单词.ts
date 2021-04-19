/* 
  151、翻转字符串里的单词
    1、去掉字符串两边的空格
    2、遍历并得到每个单词的起始索引
    3、拼接
*/

function reverseWords(s: string): string {
  let res = ''
  let s1 = ''
  let left: number, right: number
  const reg = /\s/
  for (let i = 0; i < s.length; i++) {
    if (!reg.test(s[i])) { 
      left = i
      break 
    }
  }
  for (let i = s.length - 1; i >= 0; i--) {
    if (!reg.test(s[i])) {
      right = i
      break
    }
  }
  s1 = s.substring(left, right + 1)
  if (!s1.length || s1.length == 1) return s1
  right = s1.length - 1
  for (let i = s1.length - 1; i >= 0; i--) {
    if (reg.test(s1[i]) && !reg.test(s1[i + 1])) {
      console.log(i)
      res += s1.substring(i + 1, right + 1)
      res += ' '
    }
    if (!reg.test(s1[i]) && reg.test(s1[i + 1]) && i !== s1.length - 1) {
      right = i
    }
  }
  res += s1.substring(0, right + 1)
  return res
};

console.log(reverseWords("the sky is blue"))