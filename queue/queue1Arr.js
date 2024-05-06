//this implementation have linear time complexity because it uses array to 
//enqueue and dequeue




class Queue{

    constructor(){
       this.items=[]
    }

    isEmpty(){
        return this.items.length==0
    }
    
    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
      return this.items.shift()
    }
     
    getSize(){
        return this.items.length
    }

    peek(){
        return this.items[0]
    }

    print(){
        return this.items.toString()
    }

}

const queue=new Queue()

queue.enqueue(10)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)

console.log(queue.print());

queue.dequeue()
queue.dequeue()
console.log(queue.peek());

console.log(queue.print());





