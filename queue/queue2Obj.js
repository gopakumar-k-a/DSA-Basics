//the queue implementation with object have constant time complexity
//in case of enque and deque



class Queue {

    constructor() {
        this.items = {}
        this.front = 0
        this.rear = 0
    }

    enqueue(element){
        this.items[this.rear]=element
        this.rear++
    }

    dequeue(){
        let item=this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }

    isEmpty(){
        return this.rear-this.front==0
    }

    getSize(){
        return this.rear-this.front
    }

    print(){
        if(this.isEmpty()){
            return console.log('the queue is empty');
        }
        return console.log(this.items)
    }

    peek(){
        return console.log(this.items[this.front]);
    }
}

const queue=new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)

queue.print()
queue.peek()

queue.dequeue()


queue.print()
queue.peek()


