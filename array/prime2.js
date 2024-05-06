//prime number
//what is a prime number?
//prime number is a number which is greater than 1 and no other numbers (except 1) 
// less than it is not divisible to it

//prime2.js is better algorithm, because the loop only works till square root of number there
//but in prime1.js the loop will work till n/2
function prime(n){
    if(n<2){
        return false    
    }
   for(let i=2;i<=Math.sqrt(n);i++){
    if(n%2==0){
        return false
    }
   }
   return true
}

console.log('prime 11',prime(11));
console.log('prime 4',prime(4));
console.log('prime 5',prime(5));
console.log('prime 6',prime(6));
console.log('prime 7',prime(7));

//complexity o(sqrt(n))
//quadratic


// result 
// prime 11 true
// prime 4 false
// prime 5 true
// prime 6 false
// prime 7 true

