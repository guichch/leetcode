/* 
  467、环绕字符串中唯一的子字符串
  法1、
    1、在字符串的第一个数开始遍历，记录由第一个字符开始的最大连续长度
    2、
*/

function findSubstringInWraproundString(p: string): number {
  if (!p.length) return 0
  if (p.length == 1) return 1
  let res = 0, current = p[0]
  for (let i = 1; i < p.length; i++) {
    if (p.charCodeAt(i) === p.charCodeAt(i - 1) + 1 || p.charCodeAt(i) === p.charCodeAt(i - 1) - 25) {
      current += p[i]
      continue
    }
    
  }
};

console.log('z'.charCodeAt(0) - 'a'.charCodeAt(0))