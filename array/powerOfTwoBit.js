//finding power of two using bitwise operator
//if a number is power of 2 then doing bitoperation with previous number will always return 0

function powerOfTwoUsingBit(n){
    if(n<1){
        return false
    }
    return (n & (n-1))==0
}


console.log('powerOfTwoUsingBit (2) ',powerOfTwoUsingBit(2));


//here time complexity is o(1) because the input may not affect the time of generating the output