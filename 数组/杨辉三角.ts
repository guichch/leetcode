/* 
  118：杨辉三角
*/

function generator(numRows: number): Array<Array<number>> {
  const res = []
  for (let i = 0; i < numRows; i++) {
    if (i == 0) {
      res.push([1])
      continue
    }
    let current = [1]
    for (let j = 1; j < i; j++){
      current.push(res[i - 1][j - 1] + res[i - 1][j])
    }
    current.push(1)
    res.push(current)
  }
  return res
}