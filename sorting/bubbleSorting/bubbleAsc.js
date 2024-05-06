//bubble sort ascending

function bubbleSort(arr) {
    let swapped
    do {
        swapped = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }
        }
    } while (swapped)
}

let testArray=[-1,4,-6,4,77,3]

bubbleSort(testArray)

console.log('sorted in descending ',testArray);

//big o notation is o(n^2)  (quadratic)
