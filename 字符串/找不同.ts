/* 
  389、找不同
  1、两个哈希表记录两个字符串中每个字符出现的次数，多出来那个即为结果
  2、求和，将每个字符的ASCII码值相加，然后相减再转变为字符，这里用到两个字符串方法s.charCodeAt()和String.fromCharCode()
*/