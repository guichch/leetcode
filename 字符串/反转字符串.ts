/* 
  344：反转字符串，输入一个由单个字符组成的数组，在O(1)的空间复杂度反转这个数组
  法1：直接s.reverse()就好了，而且还通过了，哈哈哈
  法2：双指针法，时间与上面相同，空间还变大了，还不如官方API好用！
*/

function reverseString(s: string[]): void {
  if (!s.length || s.length == 1) return
  let left = 0, right = s.length - 1
  while(left < right) {
    [s[left], s[right]] = [s[right], s[left]]
    left++, right--
  }
};