const Search = (arr, t) => {
  var len = arr.length
  var middle = len / 2
  var index = 0;
  if (arr[middle] == t) {
    index = middle
  }
  else if (arr[middle] > t) {
    for (let i = 0; i < middle; i++) {
      if (arr[i] == t) {
        index = i
      }
    }
  }
  else if (arr[middle] < t) {
    for (let i = middle + 1; i < len; i++) {
      if (arr[i] == t) {
        index = i
      }
    }
  }

  return index == 0 ? -1 : index
}


console.log(Search([2, 5, 7, 9], 9)) // 3
console.log(Search([2, 4, 7, 11], 4)) // 1
console.log(Search([2, 5, 7, 9], 7)) // 2
console.log(Search([2, 5, 7, 9], 11)) // -1
