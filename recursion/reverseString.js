// Reverse a String:
// Write a recursive function to reverse a string.

function reverse(s){
    if(s.length==0){
        return s
    }
    return s.charAt(s.length-1)+reverse(s.slice(0,-1))
}

console.log('reversed string ',reverse('hello'));
