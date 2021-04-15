/* 
  125：验证回文串，只考虑字符串中的字母和数字，并且不区分大小写
  双指针法
*/

function isPalindrome(s: string): boolean {
  if (!s.length || s.length == 1) return true
  let left = 0, right = s.length - 1
  const reg = /[0-9a-z]/i
  while (left < right) {
    if (!reg.test(s[left])) {
      left++
      continue
    }
    if (!reg.test(s[right])) {
      right--
      continue
    }
    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false
    left++, right--
  }
  return true
};

console.log('1'.toLowerCase())