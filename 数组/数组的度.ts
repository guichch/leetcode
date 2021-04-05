/* 
  697：找出度与原数组相同的最短子数组
*/

function findShortestSubArr(nums: number[]): number {
  let num: number, firstIndex: number, lastIndex: number
  const map: Map<number, Array<number>> = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      num = map.get(nums[i])[0]++;
      firstIndex = map.get(nums[i])[1]
      lastIndex = i;
      map.set(nums[i], [num, firstIndex, lastIndex])
    } else {
      map.set(nums[i], [1, i, i])
    }
  }
  num = firstIndex = lastIndex = 0
  for(let item of map.values()) {
    if (item[0] > num) {
      num = item[0];
      [firstIndex, lastIndex] = [item[1], item[2]]
    } else if (item[0] == num) {
      [firstIndex, lastIndex] = item[2] - item[1] > lastIndex - firstIndex ? [firstIndex, lastIndex] : [item[1], item[2]]
    }
  }
  return lastIndex - firstIndex + 1
}

 