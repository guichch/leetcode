/* 
  541、反转字符串II
*/

function reverseStr(s: string, k: number): string {
  if (!s.length || s.length == 1) return s
  const arr = s.split('')
  for (let i = 0; i < arr.length; i += 2 * k) {
    let left = i, right = Math.min(i + k - 1, s.length - 1)
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]]
      left++, right--
    }
  }
  return arr.join('')
}

console.log(reverseStr("abcdefg", 2))


