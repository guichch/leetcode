/* 
  423、从英文中重建数字
    这道题的关键在于找数字中的字母的数量
    'z'只在0中出现1次
    'w'只在2中出现1次
    'u'只在4中出现1次
    'x'只在6中出现1次
    'g'只在8中出现1次
    'h'在3和8中各出现1次
    'f'在4和5中各出现1次
    's'在6和7中各出现1次
    'i'在5, 6, 8, 9中各出现1次
    'n'在1, 7中各出现1次，在9中出现2次
*/

function originalDigits(s: string): string {
  const hash = {}
  const arr = ['z', 'w', 'u', 'x', 'g', 'h', 'f', 's', 'i', 'n']
  for (let item of arr) {
    hash[item] = 0
  }
  let i = 0
  let res = ''
  for (let item of s) {
    hash.hasOwnProperty(item) ? hash[item]++ : true
  }
  while (i < hash['z']) {
    res += 0
    i++
  }
  i = 0
  while (i < hash['w']) {
    res += 2
    i++
  }
  i = 0
  while (i < hash['u']) {
    res += 4
    i++
  }
  i = 0
  while (i < hash['x']) {
    res += 6
    i++
  }
  i = 0
  while (i < hash['g']) {
    res += 8
    i++
  }
  i = 0
  while (i < hash['h'] - hash['g']) {
    res += 3
    i++
  }
  i = 0
  while (i < hash['f'] - hash['u']) {
    res += 5
    i++
  }
  i = 0
  while (i < hash['s'] - hash['x']) {
    res += 7
    i++
  }
  i = 0
  while (i < hash['i'] - hash['x'] - hash['g'] - hash['f'] + hash['u']) {
    res += 9
    i++
  }
  i = 0
  while (i < hash['n'] - hash['s'] + hash['x'] - 2 * (hash['i'] - hash['x'] - hash['g'] - hash['f'] + hash['u'])) {
    res += 1
    i++
  }
  return res.split('').sort().join('')
};

console.log(originalDigits("owoztneoer"))