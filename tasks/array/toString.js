// Write a simple JavaScript program to join all elements of the following array 
// into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];

let arrToString = (arr) => {
    let result = ''
    for (let i = 0; i < arr.length; i++) {
        result += `${arr[i]}  `
    }
    return result
}
let arr=[3,6,45,7,8,4]
console.log(arrToString(arr));