
//checking weather a number is power of 2
function checkTwo(n){
    if(n<1){
        return false
    }
        while(n>1){
            if(n%2!==0){
                return false
            }
            n=n/2 //this part   is the reason of the time complexity in the while loop
        }
        return true
}

console.log('factorial check checkTwo(2) ',checkTwo(2));
console.log('factorial check checkTwo(4) ',checkTwo(4));
console.log('factorial check checkTwo(5) ',checkTwo(5));
console.log('factorial check checkTwo(111) ',checkTwo(111));
//time complexity o(logn)
//this time complexity is because we are only using the while loop for only half of the times
//input size is reduced half of it so it is logarithmetic time complexity

//result 
// factorial check checkTwo(2)  true
// factorial check checkTwo(4)  true
// factorial check checkTwo(5)  false
// factorial check checkTwo(111) false