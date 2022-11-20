function QuickSort(a) {
  let len = a.length
  if (len < 2) {
    return a
  }
  let pivot = a[a.length - 1]
  var left = new Array()
  var right = new Array()
  for (let i = 0; i < len - 1; i++) {
    if (a[i] < pivot) {
      left = [...left, a[i]]
    }
    else {
      right = [...right, a[i]]
    }
  }
  return [...QuickSort(left), pivot, ...QuickSort(right)]
}

var arr = [5, -5, -6, 9, 1, 3, 6, 16, 2, 99]
console.log(QuickSort(arr))

// Big O = O[log n]