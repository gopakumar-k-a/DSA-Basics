//binary search using recursion

// function binarySearch(arr, target) {
//     return search(arr, target, 0, arr.length - 1)
// }

function search(arr, target, leftIndex=0, rightIndex=arr.length - 1) {
    if (leftIndex >= rightIndex) {
        return -1
    } else {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if (arr[middleIndex] === target) {
            return middleIndex
        }
        if (target < arr[middleIndex]) {
            return search(arr, target, leftIndex, rightIndex=middleIndex-1)
        } else {
            return search(arr, target, leftIndex=middleIndex+1, rightIndex)
           
        }
    }
}

console.log('binary search ', search([1, 3, 4, 5, 6, 7, 8, 9], 8));

