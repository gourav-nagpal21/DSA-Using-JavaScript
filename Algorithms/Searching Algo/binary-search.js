const BinarySearch = (arr, t) => {
  var leftIndex = 0
  var rightIndex = arr.length - 1

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (arr[middleIndex] == t) {
      return middleIndex
    }
    if (arr[middleIndex] < t) {
      leftIndex = middleIndex + 1
    }
    else {
      rightIndex = middleIndex - 1
    }
  }
  return -1;
}

console.log(BinarySearch([2, 5, 7, 9], 9)) // 3
console.log(BinarySearch([2, 4, 7, 11], 4)) // 1
console.log(BinarySearch([2, 5, 7, 9], 7)) // 2
console.log(BinarySearch([2, 5, 7, 9], 11)) // -1

// Big O = O[log n] Log
// 1 Loop Reduce value of "n"