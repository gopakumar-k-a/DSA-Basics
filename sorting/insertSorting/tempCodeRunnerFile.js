
//insertion sort descending
function inserSort(arr){
    for(let i=1;i<arr.length;i++){
        let elementToInsert=arr[i]
        let j=i-1
        while(j>=0 && arr[j]<elementToInsert){
            arr[j+1]=arr[j]
            j=j-1
        }
        arr[j+1]=elementToInsert
    }
}

const testArray=[1,34,5,-3,-2,66]
inserSort(testArray)
console.log(testArray);