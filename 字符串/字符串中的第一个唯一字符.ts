/* 
  387、字符串中的第一个唯一字符
  用一个哈希表记录每个字符出现的次数以及首次出现的索引{l, [1, 1]}
*/

function firstUniqChar(s: string): number {
  if (!s.length) return -1
  if (s.length == 1) return 0
  const map = new Map<string, number[]> ()
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.get(s[i])[1]++
      continue
    }
    map.set(s[i], [i, 1])
  }
  for (let item of map.values()) {
    if (item[1] == 1) {
      return item[0]
    }
  }
  return -1
};