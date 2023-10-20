const clean = (number) => {
  number = number.replace(/[^0-9]/g, '');
  let numberArray = number.split('');
  if(numberArray.length < 10) throw new Error('Incorrect number of digits')
  if(numberArray.length > 10){
    if(numberArray[0] == '1'){
      const [a, ...b] = numberArray
      console.log(a, b)
    }
    else{
     throw new Error('11 digits must start with 1') 
    }
  }
  return number;
};

console.log(clean('12234567890'));
console.log(clean('321234567890'));