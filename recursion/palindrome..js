//find a string is palindrome or not using recursion

function palindrome(str){
    if(str.length<=1){
        return true
    }else{
        if(str.charAt(0)!==str.charAt(str.length-1)){
            return false
        }else{
            return palindrome(str.slice(1,-1))
        }
    }
}

console.log('hello ',palindrome('hello'));
console.log('malayalam ',palindrome('malayalam'));