//quick sort descending
function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

const tempArr = [1, 4, 5, 7, -3, -7, 33]

console.log(quickSort(tempArr));

// //output :[  33,  7,  5, 4, 1, -3, -7 ]