const isPower = (n) => {
  var res = true;
  while (n > 1) {
    (n % 2 != 0) ? res = false : res = true;
    n = n / 2
  }
  return res;
}

console.log(isPower(1)) // True
console.log(isPower(2)) // True
console.log(isPower(3)) // False
console.log(isPower(4)) // True 
console.log(isPower(5)) // False
console.log(isPower(8)) // True
console.log(isPower(12)) // False

// Big O = O[log n] Log
// 1 Loop Reduce value of "n"