

//Reverse an Array.

function revArr(arr, startIndex = 0, endIndex = arr.length - 1) {
    if (startIndex >= endIndex) {
        return arr
    }

    [arr[startIndex],arr[endIndex]]=[arr[endIndex],arr[startIndex]]

    return revArr(arr,startIndex+1,endIndex-1)
}

console.log('reversed array is ',revArr([1,3,5,7,5]));