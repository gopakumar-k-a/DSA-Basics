
//insert sort in ascending
function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let valueToInsert = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > valueToInsert) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = valueToInsert;
    }
}

let testArray=[2,5,3,56,-1,33]
insertSort(testArray)
console.log(testArray);






