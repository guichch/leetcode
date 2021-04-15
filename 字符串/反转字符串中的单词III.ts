/* 
  557：反转字符串中的单词
*/

function reverseWords(s: string): string {
  if (!s.length || s.length == 1) return s
  let res = ''
  const reg = /\s/
  let left = 0, right: number
  for (let i = 0; i < s.length; i++) {
    if (reg.test(s[i])) {
      right = i - 1
      while (left <= right) {
        res += s[right--]
      }
      res += ' '
      left = ++i
    }
  }
  right = s.length - 1
  while (left <= right) {
    res += s[right--]
  }
  return res
};

console.log(reverseWords("Let's take LeetCode contest"))