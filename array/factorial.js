//what is factorial of a number?
//factorial of a positive number is product of all numbers from 1 to the number
//factorial of 0 is 1

function factorial(n){
   let fact=1
   for(let i=2;i<=n;i++){
    fact*=i
   }
   return fact
}

console.log('fact (0)',factorial(0));
console.log('fact (1)',factorial(1));
console.log('fact (2)',factorial(2));
console.log('fact (3)',factorial(3));
console.log('fact (4)',factorial(4));
console.log('fact (5)',factorial(5));
//result
// fact (0) 1
// fact (1) 1
// fact (2) 2
// fact (3) 6
// fact (4) 24
// fact (5) 120
//big o is linear complexity o(n)

