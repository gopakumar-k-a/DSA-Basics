//Implement a recursive function to generate the nth Fibonacci number.

function fibonacciRecursive(n){
    if(n==1 || n==0){
        return n
    }

    return fibonacciRecursive(n-2)+fibonacciRecursive(n-1)
}

console.log('fibonocci of index 4',fibonacciRecursive(4));

