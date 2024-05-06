//given an sorted array return the index of the element,
// if the element is not found return -1

function binarySearch(arr, target) {
    let leftIndex = 0
    let rightIndex = arr.length - 1
    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if (arr[middleIndex] == target) {
            return middleIndex
        }
        if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }
    return -1

}

console.log(binarySearch([-1, 2, 4, 6, 9, 10], 4));
//output:2

console.log(binarySearch([0, 3, 14, 25], 2));
//output:-1