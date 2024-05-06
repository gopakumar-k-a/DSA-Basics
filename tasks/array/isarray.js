// . Write a JavaScript function to check whether an `input` is an array or not.
// Test Data :

function isArray(input) {
    return Array.isArray(input);
}


let testData1 = [1, 2, 3];
let testData2 = "Not an array";

console.log(isArray(testData1)); 
console.log(isArray(testData2)); 