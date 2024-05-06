//Write a recursive function to find the sum of digits of a given number.

function sumOfDigit(n) {
 if(n<10){
    return n
 }
 return n%10+sumOfDigit(Math.floor(n/10))
}

console.log('sum is ', sumOfDigit(45476));