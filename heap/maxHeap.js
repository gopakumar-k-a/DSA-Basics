class maxHeap {
    constructor() {
        this.heap = []
    }

    insert(value) {
        this.heap.push(value)
        this.bubbleUp()

    }

    bubbleUp() {
        let index = this.heap.length - 1
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2)
            if (this.heap[parentIndex] >= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]]
            index=parentIndex
        }
    }

    extractMax(){
        if(this.heap.length==0)return null
        if(this.heap.length==1)return this.heap.pop()
        let max=this.heap[0]
        this.heap[0]=this.heap.pop()
        this.heapify(0)
        return max
    }  

    heapify(index){
         let leftChild=(2*index)+1
         let rightChild=(2*index)+2
         let largest = index
         if(leftChild<this.heap.length && this.heap[leftChild]>this.heap[largest]){
            largest=leftChild
         }

         if(rightChild<this.heap.length && this.heap[rightChild]>this.heap[largest]){
            largest=rightChild
         }

         if(largest!=index){
            [this.heap[index],this.heap[largest]]=[this.heap[largest],this.heap[index]]
            this.heapify(largest)
         }
    }

 
}

const max=new maxHeap()
max.insert(20)
max.insert(10)
max.insert(30)
max.insert(50)
max.insert(70)
console.log(max.heap);
console.log(max.extractMax());
console.log(max.heap);
 