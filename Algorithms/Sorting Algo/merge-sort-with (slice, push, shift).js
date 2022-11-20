function MergeSort(a) {
  len = a.length
  if (len < 2) {
    return a
  }
  mid = Math.floor(len / 2)

  let left = a.slice(0, mid)
  let right = a.slice(mid)
  return Merge(MergeSort(left), MergeSort(right))
}

const Merge = (left, right) => {
  var sorted = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift())
    }
    else {
      sorted.push(right.shift())
    }
  }
  return [...sorted, ...left, ...right]
}

var arr = [5, -5, -6, 9, 1, 3, 6, 16, 2, 99]
console.log(MergeSort(arr))
