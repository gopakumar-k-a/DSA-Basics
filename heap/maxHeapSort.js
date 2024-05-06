
function heapSort(arr) {
    buildMaxHeap(arr);
    for (let i = arr.length - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, 0, i);
    }
}

function buildMaxHeap(arr) {
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
        heapify(arr, i, arr.length);
    }
}

function heapify(arr, index, heapSize) {
    let leftIndex = 2 * index + 1;
    let rightIndex = 2 * index + 2;
    lellt largest = index;

    if (leftIndex < heapSize && arr[leftIndex] > arr[largest]) {
        largest = leftIndex;
    }

    if (rightIndex < heapSize && arr[rightIndex] > arr[largest]) {
        largest = rightIndex;
    }

    if (largest !== index) {
        [arr[largest], arr[index]] = [arr[index], arr[largest]];
        heapify(arr, largest, heapSize);
    }
}

let arr = [3, 67, 8, 5, 3, 2, 9];
heapSort(arr);
console.log(arr);
