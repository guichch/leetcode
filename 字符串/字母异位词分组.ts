/* 
  49、字母异位词分组
  法1、
    1、遍历数组，每遍历到一个元素做判断，该元素是否是已遍历到元素的异位词
    2、如果是，则将该元素添加到对应的数组
    3、如果不是，则创建一个新的数组，并加该元素添加到数组中
    注：为了方便判断一个元素是否是已遍历元素的异位词，对于每个数组，记录一个异位词的排序结果作为哈希表的键
*/

function groupAnagrams(strs: string[]): string[][] {
  if (!strs.length || strs.length == 1) return [strs]
  const res = []
  const map = new Map<string, string[]>()
  for (let item of strs) {
    if (map.has(item.split('').sort().join(''))) {
      map.get(item.split('').sort().join('')).push(item)
    } else {
      map.set(item.split('').sort().join(''), [item])
    }
  }
  for (let item of map.values()) {
    res.push(item)
  }
  return res
};