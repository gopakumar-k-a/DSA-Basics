
//Implement a recursive function to calculate the power of a number (e.g., x^n).


function power(e,n){
    if(n==0){
        return 1
    }

    return e*power(e,n-1)
}

console.log('result is 2^5 is ',power(2,5));