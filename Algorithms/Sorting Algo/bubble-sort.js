var a = [9, 12, 2, 5, 9, 10, 1, 99, 19, 9, 5, -99]

var len = a.length

for (let i = 0; i <= len; i++) {
  for (let j = 0; j < len - 1; j++) {
    if (a[j] > a[j + 1]) {
      var temp = a[j + 1];
      a[j + 1] = a[j];
      a[j] = temp;
    }
  }
}

console.log(a)

// Big O = O[n^2] Log
// 2 Loop