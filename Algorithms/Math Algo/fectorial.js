function fectorial(n) {
  var num = 1;
  for (let i = n; i >= 1; i--) {
    num = num * i
  }
  return num;
}

console.log(fectorial(0))
console.log(fectorial(1))
console.log(fectorial(2))
console.log(fectorial(5))
console.log(fectorial(8))

// Big O = O(n) Linear
// 1 For Loop