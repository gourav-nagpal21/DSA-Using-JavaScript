function InsertionSort(a){
  len = a.length
  for (let i = 1;i < len; i++) {
    let temp = a[i]
    // let j = i - 1
    for(let j = i - 1; j >= 0 && a[j] > temp; j = j - 1){
      a[j+1] = a[j]
    }
    a[j+1] = temp
  }
}

var arr = [5, 9, 1, 3, 6, 16, 2, 99];
InsertionSort(arr);
console.log(arr)

// Big O = O[log n]