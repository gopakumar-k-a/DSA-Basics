//checking weather a string is palindrome
const is_palindrome = (str)=> {

    var left = 0
    var right = str.length - 1

    while (right > left) {

        if (str.charAt(left) != str.charAt(right)) {
            return false
        }
        
        left++
        right--
    }
    
    return true

}

console.log(is_palindrome('malayalam'));
console.log(is_palindrome('kdfkdhfkj'));