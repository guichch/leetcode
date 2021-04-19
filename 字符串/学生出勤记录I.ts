/* 
  551、学生出勤记录I
*/

function checkRecord(s: string): boolean {
  if (!s.length || s.length == 1) return true
  let countA = 0, countL = 0
  for (let item of s) {
    countA += item === 'A' ? 1 : 0
    countL += item === 'L' ? 1 : 0
    if (countA > 1 || countL > 2) return false
    countL = item === 'L' ? countL : 0
  }
  return true
};