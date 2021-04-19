/* 
  451、根据字符出现的频率排序，区分大小写。
  法1、
    1、遍历字符串用哈希表记录每个字符以及出现的频数
    2、桶排序：建立一个数组arr[i] = ['a', 'b', ...]，表示'a'和'b'出现了i次
    3、倒序遍历数组arr，即可得到结果
*/

function frequencySort(s: string): string {
  if (!s.length || s.length == 1) return s
  const obj = {}, arr = []
  let res = ''
  for (let item of s) {
    obj.hasOwnProperty(item) ? obj[item]++ : obj[item] = 1
  }
  for (let key of Object.keys(obj)) {
    arr[obj[key]] ? arr[obj[key]].push(key) : arr[obj[key]] = [key]
  }
  for (let i = arr.length - 1; i >= 1; i--) {
    if (arr[i]) {
      arr[i].forEach(item => {
        for (let j = 0; j < i; j++) {
          res += item
        }
      })
    }
  }
  return res
};