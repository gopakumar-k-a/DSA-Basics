//stack linked list

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class linkedList {

    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty() {
        return this.size == 0
    }

    getSize() {
        return this.size
    }

    push(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
            this.size++
        } else {
            this.tail.next = node
            this.tail = node
            this.size++
        }
    }

    pop() {
        if (this.isEmpty()) {
            return console.log('The linked list is empty');
        }
    
        if (this.getSize() === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let curr= this.head;
            while (curr.next !== this.tail) {
                curr = curr.next;
            }
            curr.next = null;
            this.tail = curr;
        }
    
        this.size--;
    }

    print() {

        if (this.isEmpty()) {
            return console.log('the linked list is empty');
        }
        let curr = this.head
        let dis = ''
        while (curr) {
            dis += `${curr.value} `
            curr = curr.next
        }
        console.log(dis);
    }

    peek() {
        if (this.isEmpty()) {
            return console.log('the linked list is empty');
        }
        console.log(this.tail.value);
    }
}

const list = new linkedList()
list.push(10)
list.push(20)
list.push(30)
list.push(40)

list.print()

list.pop()
list.pop()
list.print()
list.peek()