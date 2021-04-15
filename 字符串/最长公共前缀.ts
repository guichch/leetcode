/* 
  14、最长公共前缀
  法1：横向扫描，LCP(S1, S2, ...Sn) = LCP(LCP(LCP(S1,S2),S3),…Sn)，因此可以从前两个字符串开始依次向后扫描
  法2：纵向扫描，遍历所有字符串的每一列
*/

function longestCommonPrefix(strs: string[]): string {
  if (!strs.length) return ''
  if (strs.length == 1) return strs[0]
  let res = ''
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) return res
    }
    res += strs[0][i]
  }
  return res
};