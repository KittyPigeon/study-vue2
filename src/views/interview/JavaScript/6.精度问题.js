// 浮点数存储问题：科学计数法，由浮点数转二进制会出现无限循环，会造成二进制舍入操作，再转为十进制，造成了计算误差
// 怎么解决：
// 1.第三方库
// 2.处理精度计算问题：
// 浮点数规则：科学计数法 js采用的是双精度64位计算规则
// bignumber.js 支持大数运算
//
