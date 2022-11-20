function MergeSort(a) {
  len = a.length
  if (len < 2) {
    return a
  }
  mid = Math.floor(len / 2)

  let left = new Array()
  for(let i = 0; i < mid; i++){
    left = [...left, a[i]]
  }
  let right = new Array()
  for(let j = mid; j < len; j++){
    right = [...right, a[j]]
  }
  return Merge(MergeSort(left), MergeSort(right))
}

const Merge = (left, right) => {
  var sorted = new Array()
  
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted = [...sorted, left[0]]
      left.shift()
    }
    else {
      sorted = [...sorted, right[0]]
      right.shift()
    }
  }
  return [...sorted, ...left, ...right]
}

var arr = [5, -5, -6, 9, 1, 3, 6, 16, 2]
console.log(MergeSort(arr))
