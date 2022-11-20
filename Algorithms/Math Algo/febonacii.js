const febonacci = (n) => {
  var res = [0, 1]

  if (n == 0) {
    res = 0
  }
  else {
    for (let i = 2; i < n; i++) {
      res[i] = res[i - 1] + res[i - 2]
    }
  }

  return res

}

console.log(febonacci(0))
console.log(febonacci(1))
console.log(febonacci(2))
console.log(febonacci(5))
console.log(febonacci(8))

// Big O = O(n) Linear
// 1 For Loop