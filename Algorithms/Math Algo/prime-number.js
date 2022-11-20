function prime(n) {
  return n % 2 != 0 ? "Prime Number" : "Not a Prime Number";
}


console.log(prime(0))
console.log(prime(1))
console.log(prime(2))
console.log(prime(5))
console.log(prime(8))

// Big O[1] Constant