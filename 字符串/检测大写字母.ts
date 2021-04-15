/* 
  520: 检测大写字母
*/

function detectCapitalUse(word: string): boolean {
  if (word.length == 1) return true
  const reg = /[A-Z]/
  let count = 0
  for (let item of word) {
    count += reg.test(item) ? 1 : 0
  }
  return count === 0 || (count === 1 && reg.test(word[0])) || count === word.length
}