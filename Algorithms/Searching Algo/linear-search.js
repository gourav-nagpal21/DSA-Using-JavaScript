function LinearSearch(arr, t) {
  var len = arr.length
  for (let i = 0; i < len; i++) {
     if(arr[i] == t){
       return i;
     }
  }
  return -1;
}

console.log(LinearSearch([2, 5, 7, 9], 9)) // 3
console.log(LinearSearch([2, 4, 7, 11], 4)) // 1
console.log(LinearSearch([2, 5, 7, 9], 7)) // 2
console.log(LinearSearch([2, 5, 7, 9], 11)) // -1

// Big O = O[n] Linear 
// 1 For Loop