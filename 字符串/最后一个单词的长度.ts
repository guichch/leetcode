/* 
  58、最后一个单词的长度
  
*/

function lengthOfLastWord(s: string): number {
  if(!s.length) return 0
  const reg = /\s/
  let res = 0
  for (let i = s.length - 1; i >= 0; i--) {
    if (reg.test(s[i])) {
      if (!res) continue
      return res
    }
    res++
  }
  return res
};