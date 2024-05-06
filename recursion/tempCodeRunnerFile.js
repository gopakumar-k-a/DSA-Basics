// Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.

// Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.

function sumNum(n){
    if(n==1){
        return 1
    }

    return n+sumNum(n-1)
}

console.log('result is ',sumNum(3));