

function selectSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (min !== i) {
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
}

const tempArr=[3,6,4,1,-4,2,-9]
selectSort(tempArr)
console.log(tempArr);