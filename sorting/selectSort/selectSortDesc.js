//selection sort descending

function selectSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let max = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[max]) {
                max = j
            }
        }
        if (max != i) {
            let temp = arr[i]
            arr[i] = arr[max]
            arr[max] = temp
        }
    }
}


let tempArr=[3,6,3,11,99,-9,6]

selectSort(tempArr)
console.log(tempArr);