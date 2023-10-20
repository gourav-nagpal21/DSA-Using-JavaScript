function InsertionSort(a){
  let len = a.length;
  for (let i = 1; i = len - 1; i++){
    let temp = a[i];
    let j = i - 1;
    while(j >= 0 && a[j] > temp){
      a[j+1] = a[j];
      j = j - 1;
    }
    a[j] = temp;
  }
}

var arr = [5, 9, 1, 3, 6, 16, 2, 99];
InsertionSort(arr);
console.log(arr)

// Big O = O[log n]