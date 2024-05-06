
//finding factorial of a number using recursion

function factorialRecursive(n) {
    if (n == 1 || n == 0) {
        return 1
    }
    return n * factorialRecursive(n - 1) 
}

console.log('factorial of 4',factorialRecursive(4));