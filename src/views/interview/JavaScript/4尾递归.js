// 递归
// x的n次方
function power(x, n) {
  if (n <= 1) return x
  return x * power(x, n - 1)
}
console.log(power(5, 3))

// 尾递归
function factorial(n, total) {
  if (n === 1) return total
  return factorial(n - 1, n * total)
}

console.log(factorial(5, 1))

// 1.数组求和
function sumarr(arr, total) {
  if (arr.length == 1) return total
  return sumarr(arr.slice(1), arr.pop() + total);
}

console.log(sumarr([1, 2, 3, 4, 5], 0))

// 2.数组扁平化

