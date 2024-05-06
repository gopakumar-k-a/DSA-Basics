//circulat queue

class circularQueue {
    constructor(capacity) {
        this.items = new Array(capacity)
        this.capacity = capacity
        this.front = -1
        this.rear = -1
        this.currentLength = 0
    }

    isFull() {
        return this.currentLength == this.capacity
    }

    isEmpty() {
        return this.currentLength == 0
    }

    enqueue(element) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity
            this.items[this.rear] = element
            this.currentLength++
        }
        if (this.front == -1) {
            this.front = this.rear
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return null
        }
        let item = this.items[this.front]
        this.items[this.front] = null
        this.front = (this.front + 1) % this.capacity
        this.currentLength--
        if (this.isEmpty()) {
            this.front = -1
            this.rear = -1
        }
        return item

    }

    peek() {
        if (!this.isEmpty()) {
            return items[this.head]

        }
        return null
    }

    print() {
        if (this.isEmpty()) {
            return console.log('the circular queue is empty');
        }
        let i
        let dis = ''
        for (i = this.front; i != this.rear; i = (i + 1 % this.capacity)) {
            dis += `${this.items[i]} `
        }
        dis += this.items[i]

        return console.log(dis);
    }
}

const cir = new circularQueue(4)
cir.enqueue(10)
cir.enqueue(20)
cir.enqueue(30)
cir.enqueue(40)
cir.print()
cir.dequeue()
cir.dequeue()
cir.print()

