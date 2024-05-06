//to find products of elements in an array

function product(arr) {
    if (arr.length == 1) {
        return 1
    }
    return arr[arr.length - 1] * product(arr.slice(0, -1))
}

console.log('result is ', product([1, 2, 3, 9]));


